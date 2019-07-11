import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "../serviceWorker";
import { PersistGate } from "redux-persist/integration/react";

import App from "./main";
import storage from "../store";
import Loading from "../components/spinner";
import update from "../store/actions/update";
import UpdateHandler from "../helpers/updateHandler";
import ToastContainer from "../helpers/toastContainer";
import ErrorBoundary from "../containers/errorBoundary";

const { store, persistor } = storage();

const Root = () => {
  return (
    <ErrorBoundary>
      <ToastContainer />
      <Provider store={store}>
        <UpdateHandler />
        <PersistGate loading={<Loading />} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default Root;

const config = {
  onUpdate: () => {
    store.dispatch(update);
  }
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register(config);
