import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Loading from "../../components/spinner";

const Home = lazy(() => import("../../containers/home"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={props => <Home {...props} />} />
    </Switch>
  </Suspense>
);

export default App;
