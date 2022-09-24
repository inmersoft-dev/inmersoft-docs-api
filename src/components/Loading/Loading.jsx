// @mui components
import { Box, CircularProgress } from "@mui/material/CircularProgress";

export default function Loading(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
