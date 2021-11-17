import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import AppLayout from "./layout/AppLayout";

ReactDOM.render(
  <React.StrictMode>
    <AppLayout>
      <App />
    </AppLayout>
  </React.StrictMode>,
  document.getElementById("root"),
);
