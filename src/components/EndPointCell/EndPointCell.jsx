import { useState, useEffect, useReducer } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactJson from "react-json-view";

import axios from "axios";

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
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
  Typography,
  TextField,
  Link,
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
import ActionMenu from "../ActionMenu/ActionMenu";
import LinkButton from "../LinkButton/LinkButton";
import Loading from "../Loading/Loading";

// cookies
import { getCookie } from "../../utils/auth";

// auth
import { getAuth } from "../../auth/auth";

import config from "../../config";

const EndPointCell = (props) => {
  const theme = useTheme();

  const { endPoint, mode, model, parent } = props;

  const { control, reset, handleSubmit, getValues, setValue } = useForm();

  const [loadingState, setLoadingState] = useState(false);

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
  const [respond, setRespond] = useState({});

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

  const onSubmit = async (d) => {
    setLoadingState(true);
    setTab(2);
    switch (endPoint.method) {
      case "POST":
        try {
          const postAttributes = {};
          Object.keys(attributes).forEach((item) => {
            if (attributes[item] && attributes[item].length) {
              postAttributes[item] = [];
              attributes[item].split("[!]").forEach((jtem) => {
                postAttributes[item].push(jtem);
              });
            }
          });
          const response = await axios.post(
            `${parent}${endPoint.url}`,
            {
              ...d,
              ...postAttributes,
            },
            {
              headers: {
                ...getAuth,
                Authorization: `Bearer ${getCookie(config.basicKey)}`,
              },
            }
          );
          const data = await response.data;
          setRespond(data);
        } catch (err) {
          console.log(err);
          setRespond(err);
        }
        break;
      default: //* GET
        try {
          const queryParameters = parseQuery(d);
          const response = await axios.get(
            `${parent}${endPoint.url}${
              queryParameters.length ? `?${queryParameters}` : ""
            }`,
            {
              headers: {
                ...getAuth,
                Authorization: `Bearer ${getCookie(config.basicKey)}`,
              },
            }
          );
          const data = await response.data;
          setRespond(data);
        } catch (err) {
          console.log(err);
          setRespond(err);
        }
        break;
    }
    setLoadingState(false);
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

  const clean = () => {
    const parametersToClean = {};
    Object.keys(parameters).map((item) => (parametersToClean[item] = ""));
    reset({ ...parametersToClean });
    setRespond({});
  };

  const reactJsonProps = {
    theme: mode ? "rjv-default" : "google",
    style: {
      padding: "1rem",
      borderRadius: "1rem",
      overflow: "auto",
    },
    displayObjectSize: false,
    displayDataTypes: false,
    iconStyle: "triangle",
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleCloseMenu = () => setOpen(false);
  const openActionMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const share = async () => {
    const shareData = {
      title: endPoint.link,
      text: `${endPoint.description}`,
      url: `https://inmersoft-dev.github.io${process.env.PUBLIC_URL}${endPoint.link}`,
    };
    try {
      await navigator.share(shareData);
      console.log("data shared successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const parseQuery = (data) => {
    let queryParameters = "";
    Object.keys(data).forEach((item, i) => {
      if (data[item]) {
        if (i === 0) queryParameters += `${item}=${data[item]}`;
        else queryParameters += `&${item}=${data[item]}`;
      }
    });
    return queryParameters;
  };

  const noExample = (modelToParse) => {
    const toReturn = {};
    Object.keys(modelToParse).forEach((item) => {
      if (item !== "example") toReturn[item] = modelToParse[item];
    });
    return toReturn;
  };

  const justExample = (modelToParse) => {
    const toReturn = {};
    Object.keys(modelToParse).forEach((item) => {
      if (item === "example") toReturn[item] = modelToParse[item];
    });
    return toReturn;
  };

  return (
    <Card sx={{ width: "80%", margin: "1rem 0" }}>
      <ActionMenu
        visible={open}
        anchor={anchorEl}
        handleClose={handleCloseMenu}
        who={encodeURIComponent(endPoint.link)}
      />
      <CardHeader
        avatar={
          <SitoContainer
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: getMethodColor(),
              width: "50px",
              height: "50px",
              borderRadius: "100%",
            }}
          >
            {endPoint.method}
          </SitoContainer>
        }
        action={
          <IconButton color="primary" onClick={openActionMenu}>
            <MoreVert />
          </IconButton>
        }
        title={
          <Box>
            {endPoint.url}
            <LinkButton link={endPoint.link} />
          </Box>
        }
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
          Try it
          {!expanded ? <ExpandMore /> : <ExpandLess />}
        </Button>
        <IconButton color="primary" onClick={share}>
          <Share />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography paragraph>Parameters:</Typography>
          {Object.values(parameters).map((item) => (
            <Box key={item.label} sx={{ margin: "20px 0", width: "100%" }}>
              {item.type === "number" && (
                <Controller
                  control={control}
                  name={item.id}
                  render={({ field }) => (
                    <TextField
                      label={item.label}
                      required={item.required}
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
                    <Tooltip title="Add attribute">
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
              {item.type === "boolean" && (
                <Controller
                  control={control}
                  name={item.id}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox checked={field.value} {...field} />}
                      label={item.label}
                    />
                  )}
                />
              )}
            </Box>
          ))}
          <SitoContainer sx={{ width: "100%" }} justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              sx={{ marginRight: "20px" }}
            >
              Execute
            </Button>
            <Button type="button" onClick={clean} variant="outlined">
              Clear
            </Button>
          </SitoContainer>
          <TabView
            value={tab}
            onChange={handleTab}
            tabs={["Answer", "Example", "Test"]}
            content={[
              <Box>
                <Typography paragraph>Response:</Typography>
                <Box
                  sx={{
                    minHeight: "300px",
                    width: "100%",
                  }}
                >
                  <ReactJson {...reactJsonProps} src={noExample(model)} />
                </Box>
              </Box>,
              <Box>
                <Typography paragraph>Example response:</Typography>
                <Box
                  sx={{
                    minHeight: "300px",
                    width: "100%",
                  }}
                >
                  <ReactJson {...reactJsonProps} src={justExample(model)} />
                </Box>
              </Box>,
              <Box
                sx={{
                  minHeight: "300px",
                  width: "100%",
                }}
              >
                <Typography paragraph>Test:</Typography>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={config.apiTrinidadUrl}
                >
                  {parent}
                  {endPoint.url}
                  {endPoint.method === "GET"
                    ? `${
                        parseQuery(getValues()).length
                          ? `?${parseQuery(getValues())}`
                          : ""
                      }`
                    : ""}
                </Link>
                <Loading
                  visible={loadingState}
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                />
                {!loadingState && (
                  <Box>
                    <ReactJson {...reactJsonProps} src={respond} />
                  </Box>
                )}
              </Box>,
            ]}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
};

EndPointCell.propTypes = {
  endPoint: PropTypes.object.isRequired,
  mode: PropTypes.bool.isRequired,
  parent: PropTypes.string.isRequired,
};

export default EndPointCell;
