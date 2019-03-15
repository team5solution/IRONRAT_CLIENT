import React from "react";
import { hydrate, render } from "react-dom";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./store";

import "../css/main.css";

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector("#app")
);

/*
hydrate(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector("#app")
);*/
