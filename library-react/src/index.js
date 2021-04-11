import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
/* import $ from "jquery";
import Popper from "popper.js"; */
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
