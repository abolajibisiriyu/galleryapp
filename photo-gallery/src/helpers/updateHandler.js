import { useEffect } from "react";
import { connect } from "react-redux";

import { toastSuccess } from "../helpers/toasters";

const App = ({ newupdate }) => {
  useEffect(() => {
    newupdate && toastSuccess("There is an update, please reload the app");
  });
  return null;
};

const mapStateToProps = ({ update }) => update;

export default connect(mapStateToProps)(App);
