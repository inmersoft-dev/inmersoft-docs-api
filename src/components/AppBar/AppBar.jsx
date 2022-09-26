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

// local style
import { Search, StyledInputBase, SearchIconWrapper } from "./style";

const AppBar = (props) => {
  const { toggleMode, mode } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
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
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4">Inmersoft-Docs-APIs</Typography>
          </SitoContainer>
          <SitoContainer>
            <Tooltip title="Ir al Inicio">
              <Link color="inherit" to={`${process.env.PUBLIC_URL}/`}>
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
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </SitoContainer>
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
