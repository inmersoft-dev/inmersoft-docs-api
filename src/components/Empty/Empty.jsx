/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui icons
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

// @mui components
import { useTheme, Typography, Button } from "@mui/material";

// sito components
import SitoContainer from "sito-container";

// contexts
import { useLanguage } from "context/LanguageProvider";

const Empty = (props) => {
  const theme = useTheme();
  const { onAction, sx, icon, title, button } = props;
  const { languageState } = useLanguage();
  return (
    <SitoContainer
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "500px", ...sx }}
      flexDirection="column"
    >
      {icon}
      <Typography variant="h4" sx={{ color: theme.palette.disabled.main }}>
        {title || languageState.texts.Messages.NoData}
      </Typography>
      {onAction && (
        <Button type="submit" onClick={onAction} variant="contained" sx={{ marginTop: "10px" }}>
          {button || languageState.texts.Details.Buttons.Insert}
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
  title: PropTypes.string,
  button: PropTypes.string,
};

export default Empty;
