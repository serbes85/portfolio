import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "@csstools/normalize.css";
import "./index.scss";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
