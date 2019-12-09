import React from "react";
import ReactDom from "react-dom";
import "@babel/polyfill";
import App from "./App";
import DefaultErrorBoundary from "./DefaultErrorBoundary";
import "./style.css";

ReactDom.render(
  <DefaultErrorBoundary>
    <App />
  </DefaultErrorBoundary>,
  document.getElementById("app")
);
