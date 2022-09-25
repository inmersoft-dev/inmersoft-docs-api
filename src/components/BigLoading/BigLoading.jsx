import PropTypes from "prop-types";

// sito container
import SitoContainer from "sito-container";

// @mui components
import { Box } from "@mui/material";

// images
import logoReact from "../../logo.svg";

const BigLoading = (props) => {
  const { visible, logo } = props;
  return (
    <SitoContainer
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        transition: "opacity 500ms ease",
        opacity: visible ? 1 : 0,
      }}
    >
      <Box className="parent-spinner">
        <img src={logoReact} className="logo-spinner" alt="logo-react" />
      </Box>
      <img src={logo} className="logo-industry" alt="logo" />
    </SitoContainer>
  );
};

BigLoading.defaultProps = {};

BigLoading.propTypes = {
  visible: PropTypes.bool.isRequired,
  logo: PropTypes.string.isRequired,
};

export default BigLoading;
