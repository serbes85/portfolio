import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import MainStore from "./stories/MainStore";
import App from "./App";
import "@csstools/normalize.css";
import "./index.scss";

const stories = {
  MainStore,
};

render(
  <StrictMode>
    <Provider {...stories}>
      <App />
    </Provider>
  </StrictMode>,

  document.getElementById("root")
);
