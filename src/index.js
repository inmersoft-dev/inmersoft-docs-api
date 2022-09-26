import React from "react";
import ReactDOM from "react-dom";

// App
import App from "./App";

// context
import { NotificationProvider } from "./contexts/NotificationProvider";

// styles
import "./index.css";

ReactDOM.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>,
  document.getElementById("root")
);
