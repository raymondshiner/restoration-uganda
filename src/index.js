import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactDOM from "react-dom";
import App from "./app/App";
import AppThemeProvider from "./app/AppThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppThemeProvider>
        <CssBaseline />
        <App />
      </AppThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
