import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @mui components
import { Tooltip, List, ListItem, Link, Typography } from "@mui/material";

// @mui icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// own components
import RadialButton from "../components/RadialButton/RadialButton";

function Home(props) {
  const { toggleMode, mode } = props;

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
          <Link href="/#/trinidad">Descubre Trinidad</Link>
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
