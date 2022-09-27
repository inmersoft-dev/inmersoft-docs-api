import React from "react";
import ReactDOM from "react-dom";

// App
import App from "./App";

// context
import { NotificationProvider } from "./contexts/NotificationProvider";
import { DeviceProvider } from "./contexts/DeviceProvider";

// styles
import "./index.css";

ReactDOM.render(
  <NotificationProvider>
    <DeviceProvider>
      <App />
    </DeviceProvider>
  </NotificationProvider>,
  document.getElementById("root")
);
