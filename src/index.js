import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import App from "./App";
import store from "./store/reducers/index";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
