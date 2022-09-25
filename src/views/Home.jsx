import { useState, useEffect } from "react";

import axios from "axios";

import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @mui components
import { Tooltip, List, ListItem, Chip, Link, Typography } from "@mui/material";

// @mui icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// own components
import LinkButton from "../components/LinkButton/LinkButton";
import RadialButton from "../components/RadialButton/RadialButton";

import config from "../config";

function Home(props) {
  const { toggleMode, mode } = props;

  const [trinidadState, setTrinidadState] = useState("success");

  const validateTrinidad = async () => {
    try {
      await axios.get(`${config.apiTrinidadUrl}docs`);
      setTrinidadState("success");
    } catch (err) {
      console.log(err);
      setTrinidadState("error");
    }
  };

  const states = {
    success: "ONLINE",
    error: "OFFLINE",
  };

  useEffect(() => {
    validateTrinidad();
  }, []);

  return (
    <SitoContainer flexDirection="column" sx={{ padding: "1rem" }}>
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
      <Typography variant="h3">Lista de APIs</Typography>
      <List>
        <ListItem>
          <Link id="trinidad" href="/trinidad">
            Descubre Trinidad
          </Link>
          <LinkButton link="/indexes/#trinidad" />
          <Chip
            sx={{ marginLeft: "20px" }}
            label={states[trinidadState]}
            color={trinidadState}
            size="small"
          />
        </ListItem>
      </List>
    </SitoContainer>
  );
}

Home.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired,
};

export default Home;
