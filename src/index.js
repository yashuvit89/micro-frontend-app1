import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

console.log("Init Product APP");

window.renderProduct = (containerId, props) => {
  ReactDOM.render(<App {...props} />, document.getElementById(containerId));
  serviceWorker.unregister();
};

window.unmountProduct = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
