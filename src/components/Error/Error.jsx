/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui icons
import ErrorIcon from "@mui/icons-material/Error";
import ReplayIcon from "@mui/icons-material/Replay";

// @mui components
import { Typography, Button } from "@mui/material";

// sito components
import SitoContainer from "sito-container";

const Error = (props) => {
  const { onAction } = props;

  return (
    <SitoContainer
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "500px" }}
      flexDirection="column"
    >
      <ErrorIcon size="large" color="error" />
      <Typography
        sx={{ marginTop: "15px" }}
        color="inherit"
        variant="subtitle1"
      >
        Ha ocurrido un error
      </Typography>
      {onAction && (
        <Button
          color="inherit"
          type="submit"
          onClick={onAction}
          sx={{ marginTop: "15px" }}
        >
          <ReplayIcon sx={{ marginRight: "15px" }} />
          Reintentar
        </Button>
      )}
    </SitoContainer>
  );
};

Error.defaultProps = {
  onAction: undefined,
};

Error.propTypes = {
  onAction: PropTypes.func,
};

export default Error;
