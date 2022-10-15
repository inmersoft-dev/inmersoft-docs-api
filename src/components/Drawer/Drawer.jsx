import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @mui/material
import { Tooltip, Typography, Link, IconButton, Button } from "@mui/material";

// @mui/icons-material
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CancelIcon from "@mui/icons-material/Cancel";
import HomeIcon from "@mui/icons-material/Home";

const Drawer = (props) => {
  const { mode, visible, handleClose, toggleMode } = props;

  return (
    <SitoContainer
      extraProps={{ onClick: handleClose }}
      sx={{
        top: 0,
        left: 0,
        height: "100vh",
        position: "fixed",
        width: "100vw",
        zIndex: visible ? 9999 : -1,
        transition: "z-index 500ms ease",
      }}
    >
      <SitoContainer
        sx={{
          width: visible ? "100vw" : 0,
          height: "100vh",
          background: "#222222ce",
          position: "absolute",
          zIndex: 999999,
        }}
      >
        <SitoContainer
          flexDirection="column"
          sx={{
            transition: "all 500ms ease",
            height: "100%",
            width: "300px",
            transform: `translateX(${visible ? 0 : "-300px"})`,
            background: "#333444",
            zIndex: 999999,
          }}
        >
          <SitoContainer
            justifyContent="flex-end"
            sx={{ width: "100%", position: "relative", height: "40px" }}
          >
            <IconButton color="error" onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </SitoContainer>
          <SitoContainer flexDirection="column" sx={{ paddingLeft: "20px" }}>
            <Typography variant="h5" fontWeight="bold">
              Inmersoft-Docs-APIs
            </Typography>
            <Tooltip title="Ir al Inicio">
              <Link
                color="inherit"
                underline="none"
                href={`${process.env.PUBLIC_URL}/indexes`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <IconButton color="inherit">
                  <HomeIcon />
                </IconButton>
                Go Home
              </Link>
            </Tooltip>
            <Tooltip title="Ir a GitHub">
              <Link
                underline="none"
                rel="noopener"
                target="_blank"
                color="inherit"
                href="https://github.com/inmersoft-dev/inmersoft-docs-api"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <IconButton color="inherit">
                  <GitHubIcon />
                </IconButton>
                GitHub{" "}
                <LaunchIcon sx={{ marginLeft: "5px", fontSize: "14px" }} />
              </Link>
            </Tooltip>
            <Tooltip title={mode ? "Modo Oscuro" : "Modo Claro"}>
              <Button
                type="button"
                color="inherit"
                onClick={toggleMode}
                sx={{
                  width: "100%",
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "flex-start",
                }}
              >
                {mode ? (
                  <DarkModeIcon sx={{ marginRight: "10px" }} />
                ) : (
                  <LightModeIcon sx={{ marginRight: "10px" }} />
                )}
                Toggle Mode
              </Button>
            </Tooltip>
          </SitoContainer>
        </SitoContainer>
      </SitoContainer>
    </SitoContainer>
  );
};

Drawer.propTypes = {
  mode: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default Drawer;
