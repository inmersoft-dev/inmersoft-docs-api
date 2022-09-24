import React from "react";
import ReactDOM from "react-dom/client";

// App
import App from "./App";

// context
import { NotificationProvider } from "./contexts/NotificationProvider";

// styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);
