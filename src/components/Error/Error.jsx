/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui icons
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

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
      <ErrorOutlineIcon color="error" sx={{ fontSize: "4rem" }} />
      <Typography color="error" variant="h4">
        Ha ocurrido un error
      </Typography>
      {onAction && (
        <Button
          variant="contained"
          type="submit"
          onClick={onAction}
          sx={{ marginTop: "20px" }}
        >
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
