import { useState } from "react";

// images
import logo from "./logo.svg";

// @mui components
import { ThemeProvider, CssBaseline } from "@mui/material";

// routes
import { HashRouter, Routes, Route } from "react-router-dom";

// own components
import Notification from "./components/Notification/Notification";

// views
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
      <CssBaseline />
      <Notification />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Presiona <u>comenzar</u> para ir al Índice
                  </p>
                  <a className="App-link" href="/#/indexes">
                    Comenzar
                  </a>
                </header>
              </div>
            }
          />
          <Route
            path="/indexes"
            element={<Home />}
            toggleMode={toggleMode}
            mode={mode}
          />
          <Route
            path="/trinidad"
            element={<Trinidad toggleMode={toggleMode} mode={mode} />}
          />
          <Route
            path="*"
            element={<NotFound toggleMode={toggleMode} mode={mode} />}
          />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
