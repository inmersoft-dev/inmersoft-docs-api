import { useState, useEffect, useReducer } from "react";
import { useForm, Controller } from "react-hook-form";

import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @mui components
import {
  useTheme,
  Box,
  Tooltip,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Chip,
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

// own components
import TabView from "../../components/TabView/TabView";

export default function EndPointCell(props) {
  const theme = useTheme();

  const { endPoint } = props;

  const { control, reset, handleSubmit, getValues, setValue } = useForm();

  const parametersReducer = (parametersState, action) => {
    const { type } = action;
    switch (type) {
      case "set": {
        const newParametersState = { ...parametersState };
        const { parameters } = action;
        parameters.forEach(
          (item) => (newParametersState[item.id] = { ...item })
        );
        return newParametersState;
      }
      case "add-attribute": {
        const newParametersState = { ...parametersState };
        const { who, newAttributes } = action;
        newParametersState[who].attributes = newAttributes;
        return newParametersState;
      }
      default:
        return {};
    }
  };

  const [parameters, setParameters] = useReducer(parametersReducer, {});

  const attributesReducer = (attributesState, action) => {
    const { type } = action;
    switch (type) {
      case "add": {
        const newAttributes = { ...attributesState };
        const { who, attribute } = action;
        if (!newAttributes[who]) newAttributes[who] = "";
        newAttributes[who] += newAttributes[who].length
          ? `[!]${attribute}`
          : attribute;
        setParameters({ type: "add-attribute", who, newAttributes });
        return newAttributes;
      }
      case "remove": {
        const newAttributes = { ...attributesState };
        const { who, index } = action;
        let newOptions = "";
        newAttributes[who].split("[!]").forEach((item, i) => {
          if (i !== index) newOptions += i === 0 ? item : `[!]${item}`;
        });
        newAttributes[who] = newOptions;
        setParameters({ type: "add-attribute", who, newAttributes });
        return newAttributes;
      }
      default:
        return {};
    }
  };

  const [attributes, setAttributes] = useReducer(attributesReducer, {});
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

  const onSubmit = (d) => {
    console.log(d);
  };

  const addChips = (who) => {
    setAttributes({ type: "add", who, attribute: getValues(who) });
    setValue(who, "");
  };

  const removeChips = (who, index) =>
    setAttributes({ type: "remove", who, index });

  useEffect(() => {
    setParameters({ type: "set", parameters: endPoint.parameters });
  }, [endPoint]);

  const [tab, setTab] = useState(0);
  const handleTab = (e, newTab) => setTab(newTab);

  const getMethodColor = () => {
    switch (endPoint.method) {
      case "POST":
        return theme.palette.info.main;
      default: //* get
        return theme.palette.success.main;
    }
  };

  return (
    <Card sx={{ width: "80%", margin: "1rem 0" }}>
      <CardHeader
        avatar={
          <Box
            sx={{
              bgcolor: getMethodColor(),
              padding: "17px 15px",
              borderRadius: "100%",
            }}
          >
            {endPoint.method}
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
          {Object.values(parameters).map((item) => (
            <Box key={item.label} sx={{ margin: "20px 0", width: "100%" }}>
              {item.type === "number" && (
                <Controller
                  control={control}
                  name={item.id}
                  render={({ field }) => (
                    <TextField
                      label={item.label}
                      type="number"
                      sx={{ width: "100%" }}
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
                          sx={{ width: "100%" }}
                          {...field}
                        />
                      )}
                    />
                    <Tooltip title="Agregar atributo">
                      <IconButton
                        onClick={() => addChips(item.id)}
                        color="primary"
                      >
                        <AddCircle />
                      </IconButton>
                    </Tooltip>
                  </SitoContainer>
                  <SitoContainer>
                    {attributes[item.id] && attributes[item.id].length > 0 && (
                      <SitoContainer
                        sx={{ flexWrap: "wrap", margin: "20px 0" }}
                      >
                        {attributes[item.id].split("[!]").map((jtem, j) => (
                          <Chip
                            color="primary"
                            key={jtem}
                            label={jtem}
                            sx={{ marginRight: "10px" }}
                            onDelete={() => removeChips(item.id, j)}
                          />
                        ))}
                      </SitoContainer>
                    )}
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
          <TabView
            value={tab}
            onChange={handleTab}
            tabs={["Respuestas", "Prueba"]}
            content={[
              <Box>
                <Typography paragraph>Respuesta:</Typography>
              </Box>,
              <Box>
                <Typography paragraph>Prueba:</Typography>
              </Box>,
            ]}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}

EndPointCell.propTypes = {
  endPoint: PropTypes.object.isRequired,
};
