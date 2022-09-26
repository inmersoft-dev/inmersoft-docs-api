import { useState } from "react";

import PropTypes from "prop-types";

// @mui components
import {
  AppBar as MUIAppBar,
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  Link,
} from "@mui/material";

// @mui icons
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

// sito components
import SitoContainer from "sito-container";

// own components
import Drawer from "../Drawer/Drawer";

// local style
import { Search, StyledInputBase, SearchIconWrapper } from "./style";

const AppBar = (props) => {
  const { toggleMode, mode } = props;

  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowDrawer(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer state={showDrawer} toggleDrawer={toggleDrawer} />
      <MUIAppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SitoContainer alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2, display: { md: "none", sm: "inherit" } }}
              onClick={() => toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4">Inmersoft-Docs-APIs</Typography>
          </SitoContainer>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Ir al Inicio">
              <Link color="inherit" href={`${process.env.PUBLIC_URL}/`}>
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Ir a GitHub">
              <Link
                underline="none"
                rel="noopener"
                href="https://github.com/inmersoft-dev/inmersoft-docs-api"
                target="_blank"
                color="inherit"
              >
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title={mode ? "Modo Oscuro" : "Modo Claro"}>
              <IconButton color="inherit" onClick={toggleMode}>
                {mode ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Buscar…" />
            </Search>
          </Box>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
};

AppBar.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired,
};

export default AppBar;
