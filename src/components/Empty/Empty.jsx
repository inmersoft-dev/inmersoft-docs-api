/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui icons
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

// @mui components
import { Typography } from "@mui/material";

// sito components
import SitoContainer from "sito-container";

const Empty = (props) => {
  const { sx, icon } = props;

  return (
    <SitoContainer
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "500px", ...sx }}
      flexDirection="column"
    >
      {icon}
      <Typography
        sx={{ marginTop: "15px" }}
        color="inherit"
        variant="subtitle1"
      >
        No results
      </Typography>
    </SitoContainer>
  );
};

Empty.defaultProps = {
  sx: {},
  icon: <ReceiptLongIcon color="inherit" size="large" />,
  title: undefined,
  button: undefined,
};

Empty.propTypes = {
  sx: PropTypes.object,
  icon: PropTypes.node,
};

export default Empty;
