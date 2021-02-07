import React, { StrictMode } from "react";
import { render } from "react-dom";
import "@csstools/normalize.css";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./store";

const store = createStore();

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,

  document.getElementById("root")
);
