import PropTypes from "prop-types";

// @mui components
import { Box, CircularProgress } from "@mui/material/";

const Loading = (props) => {
  const { visible, sx } = props;
  return (
    <Box
      sx={{
        transition: "opacity 500ms ease",
        opacity: visible ? 1 : 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

Loading.defaultProps = {
  sx: {},
};

Loading.propTypes = {
  visible: PropTypes.bool.isRequired,
  sx: PropTypes.object,
};

export default Loading;
