import { useState } from "react";

// @mui components
import { ThemeProvider, CssBaseline } from "@mui/material";

// routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// own components
import Notification from "./components/Notification/Notification";
import AppBar from "./components/AppBar/AppBar";
import ToTop from "./components/ToTop/ToTop";
import Start from "./components/Start/Start";

// views
import SantaIfigenia from "./views/SantaIfigenia/SantaIfigenia";
import Trinidad from "./views/Trinidad/Trinidad";
import NotFound from "./views/404/NotFound";
import Home from "./views/Home";

// theme
import dark from "./assets/theme/dark";
import light from "./assets/theme/light";

// contexts

// style
import "./App.css";

function App() {
  const [mode, setMode] = useState(false);

  const toggleMode = () => setMode(!mode);

  return (
    <ThemeProvider theme={mode ? light : dark}>
      <AppBar toggleMode={toggleMode} mode={mode} />
      <ToTop />
      <CssBaseline />
      <Notification />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route
            exact
            path="/indexes"
            element={<Home toggleMode={toggleMode} mode={mode} />}
          />
          <Route
            exact
            path="/trinidad"
            element={<Trinidad toggleMode={toggleMode} mode={mode} />}
          />
          <Route
            exact
            path="/santa-ifigenia"
            element={<SantaIfigenia toggleMode={toggleMode} mode={mode} />}
          />
          <Route
            path="*"
            element={<NotFound toggleMode={toggleMode} mode={mode} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
