// @mui components
import { Box, Link } from "@mui/material";

// images
import logo from "../../logo.svg";

import config from "../../config";

const Start = () => {
  console.log(config);
  return (
    <Box className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Press <u>start</u> to go to the index
        </p>
        <Link className="App-link" href={`${process.env.PUBLIC_URL}/indexes`}>
          start
        </Link>
      </header>
    </Box>
  );
};

export default Start;
