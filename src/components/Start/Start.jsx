// images
import logo from "../../logo.svg";

// @mui components
import { Box, Link } from "@mui/material";

const Start = () => {
  return (
    <Box className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Presiona <u>comenzar</u> para ir al Índice
        </p>
        <Link className="App-link" href={`${process.env.PUBLIC_URL}/indexes`}>
          Comenzar
        </Link>
      </header>
    </Box>
  );
};

export default Start;
