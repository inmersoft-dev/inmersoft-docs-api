import { useForm, Controller } from "react-hook-form";
import { useState, useReducer } from "react";

import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @mui components
import {
  useTheme,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Button,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";

// @mui icons
import {
  Share,
  ExpandMore,
  MoreVert,
  ExpandLess,
  AddCircle,
} from "@mui/icons-material";

export default function EndPointCell(props) {
  const theme = useTheme();
  const { endPoint } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

  const { control, reset, handleSubmit, getValues } = useForm();

  const onSubmit = (d) => {
    console.log(d);
  };

  const addChips = (who) => {};

  return (
    <Card sx={{ width: "80%", margin: "1rem 0" }}>
      <CardHeader
        avatar={
          <Box
            sx={{
              bgcolor: theme.palette.success.main,
              padding: "17px 15px",
              borderRadius: "100%",
            }}
          >
            GET
          </Box>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={endPoint.url}
        subheader={endPoint.lastUpdate}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {endPoint.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <Button
          onClick={handleExpandClick}
          sx={{ display: "flex" }}
          variant="outlined"
        >
          Probar
          {!expanded ? <ExpandMore /> : <ExpandLess />}
        </Button>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography paragraph>Parámetros:</Typography>
          {console.log(endPoint)}
          {endPoint.parameters.map((item) => (
            <Box key={item.label} fullWidth sx={{ margin: "20px 0" }}>
              {item.type === "number" && (
                <Controller
                  control={control}
                  name={item.id}
                  render={({ field }) => (
                    <TextField
                      label={item.label}
                      type="number"
                      fullWidth
                      {...field}
                    />
                  )}
                />
              )}
              {item.type === "chips" && (
                <Box>
                  <SitoContainer alignItems="center">
                    <Controller
                      control={control}
                      name={item.id}
                      render={({ field }) => (
                        <TextField
                          label={item.label}
                          type="number"
                          fullWidth
                          {...field}
                        />
                      )}
                    />
                    <IconButton onClick={() => addChips(item.id)}>
                      <AddCircle />
                    </IconButton>
                  </SitoContainer>
                </Box>
              )}
            </Box>
          ))}
          <SitoContainer sx={{ width: "100%" }} justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              sx={{ marginRight: "20px" }}
            >
              Ejecutar
            </Button>
            <Button type="button" onClick={reset} variant="outlined">
              Limpiar
            </Button>
          </SitoContainer>
          <Typography paragraph>Respuesta:</Typography>
          <Typography paragraph></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

EndPointCell.propTypes = {
  endPoint: PropTypes.func.isRequired,
};
