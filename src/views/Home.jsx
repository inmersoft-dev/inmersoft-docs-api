import { useState, useEffect } from "react";

import axios from "axios";

import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @mui components
import { List, ListItem, Chip, Link, Typography } from "@mui/material";

// own components
import LinkButton from "../components/LinkButton/LinkButton";

import config from "../config";

function Home(props) {
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
    <SitoContainer
      flexDirection="column"
      sx={{ padding: "100px 24px 100px 24px" }}
    >
      <Typography variant="h3">Lista de APIs</Typography>
      <List>
        <ListItem>
          <Link id="trinidad" href={`${process.env.PUBLIC_URL}/trinidad`}>
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
