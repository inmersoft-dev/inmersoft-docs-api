/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui icons
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

// @mui components
import { useTheme, Typography, Button } from "@mui/material";

// sito components
import SitoContainer from "sito-container";

const Empty = (props) => {
  const theme = useTheme();
  const { onAction, sx, icon } = props;

  return (
    <SitoContainer
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "500px", ...sx }}
      flexDirection="column"
    >
      {icon}
      <Typography variant="h4" sx={{ color: theme.palette.disabled.main }}>
        No hay resultados
      </Typography>
      {onAction && (
        <Button
          type="submit"
          onClick={onAction}
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Insertar
        </Button>
      )}
    </SitoContainer>
  );
};

Empty.defaultProps = {
  onAction: undefined,
  sx: {},
  icon: <ReceiptLongIcon color="secondary" sx={{ fontSize: "4rem" }} />,
  title: undefined,
  button: undefined,
};

Empty.propTypes = {
  onAction: PropTypes.func,
  sx: PropTypes.object,
  icon: PropTypes.node,
};

export default Empty;
