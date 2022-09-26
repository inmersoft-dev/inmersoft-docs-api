import { useState, useEffect } from "react";

// images
import logo from "./logo.svg";

// @mui components
import { ThemeProvider, CssBaseline, Box, Tooltip, Link } from "@mui/material";

// routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// own components
import Notification from "./components/Notification/Notification";
import RadialButton from "./components/RadialButton/RadialButton";

// @mui icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

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
import ToTop from "./components/ToTop/ToTop";

function App() {
  const [mode, setMode] = useState(false);

  const toggleMode = () => setMode(!mode);

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <ThemeProvider theme={mode ? light : dark}>
      <ToTop />
      <CssBaseline />
      <Notification />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <Box className="App">
                <Tooltip title={mode ? "Modo Oscuro" : "Modo Claro"}>
                  <RadialButton
                    sx={{
                      marginTop: 0,
                      position: "fixed",
                      top: "20px",
                      right: "20px",
                      zIndex: 20,
                      transition: "top 500ms ease",
                    }}
                    onClick={toggleMode}
                    icon={mode ? <DarkModeIcon /> : <LightModeIcon />}
                  />
                </Tooltip>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Presiona <u>comenzar</u> para ir al Índice
                  </p>
                  <Link
                    className="App-link"
                    href={`${process.env.PUBLIC_URL}/indexes`}
                  >
                    Comenzar
                  </Link>
                </header>
              </Box>
            }
          />
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
            path="*"
            element={<NotFound toggleMode={toggleMode} mode={mode} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
