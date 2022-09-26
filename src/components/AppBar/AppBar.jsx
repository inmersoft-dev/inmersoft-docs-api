import PropTypes from "prop-types";

// @mui components
import {
  AppBar as MUIAppBar,
  Box,
  Toolbar,
  Tooltip,
  Button,
  IconButton,
  TextField,
  InputBase,
  Typography,
} from "@mui/material";

// @mui styles
import { styled, alpha } from "@mui/material/styles";

// @mui icons
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

// sito components
import SitoContainer from "sito-container";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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
            <Tooltip title="Ir a GitHub">
              <IconButton color="inherit" onClick={toggleMode}>
                <GitHubIcon />
              </IconButton>
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
