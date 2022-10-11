import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./style/input.scss";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";
import muiTheme from "./providers/themeProvider.jsx";
import { MuiThemeProvider } from "@material-ui/core/styles/";

/* NOTE THE NEW root.render way of doing things for React 18 to work properly */
const container = document.getElementById("root");

const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);
