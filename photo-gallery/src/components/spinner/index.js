import React from "react";
import "./elements.css";

export const Spinner = () => (
  <div className="custom-loader">
    <div className="xyz-out" />
    <div className="xyz-in" />
  </div>
);

const App = () => (
  <div className="loader-container">
    <Spinner />
  </div>
);

export default App;
