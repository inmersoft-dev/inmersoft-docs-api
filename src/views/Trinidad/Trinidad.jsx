import { useState } from "react";

import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @mui icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// @mui components
import { Tooltip } from "@mui/material";

// own components
import EndPointCell from "../../components/EndPointCell/EndPointCell";
import RadialButton from "../../components/RadialButton/RadialButton";

import config from "../../config";
import {
  attributes,
  count,
  events,
  from,
  id,
  ids,
  news,
  places,
  placesAttributes,
  placeTypes,
  placeTypesAttributes,
  routes,
  routesAttributes,
} from "../../utils/inputPrefab";
import TabView from "../../components/TabView/TabView";

// models
import models from "./models/models";

const Trinidad = (props) => {
  const { toggleMode, mode } = props;

  const [tab, setTab] = useState(0);
  const handleTab = (e, newTab) => setTab(newTab);

  const postPoints = [
    {
      url: `${config.apiTrinidadUrl}campaign/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener campañas",
      parameters: [ids, count, from, attributes],
      method: "POST",
      model: "campaign",
    },
    {
      url: `${config.apiTrinidadUrl}campaign/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener una campaña",
      parameters: [id, attributes],
      method: "POST",
      model: "campaign",
    },
    {
      url: `${config.apiTrinidadUrl}event/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener eventos",
      parameters: [ids, count, from, attributes],
      method: "POST",
      model: "event",
    },
    {
      url: `${config.apiTrinidadUrl}event/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener un evento",
      parameters: [ids, attributes],
      method: "POST",
      model: "event",
    },
    {
      url: `${config.apiTrinidadUrl}news/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener noticias",
      parameters: [ids, count, from, attributes],
      method: "POST",
      model: "news",
    },
    {
      url: `${config.apiTrinidadUrl}news/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener una noticia",
      parameters: [ids, attributes],
      method: "POST",
      model: "event",
    },
    {
      url: `${config.apiTrinidadUrl}place/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener lugares",
      parameters: [
        ids,
        count,
        from,
        routes,
        routesAttributes,
        placeTypes,
        placeTypesAttributes,
      ],
      method: "POST",
      model: "place",
    },
    {
      url: `${config.apiTrinidadUrl}place/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener un lugar",
      parameters: [
        id,
        routes,
        routesAttributes,
        placeTypes,
        placeTypesAttributes,
      ],
      method: "POST",
      model: "place",
    },
    {
      url: `${config.apiTrinidadUrl}place-type/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener tipos de lugares",
      parameters: [ids, count, from, places, placesAttributes],
      method: "POST",
      model: "placeType",
    },
    {
      url: `${config.apiTrinidadUrl}place-type/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener un tipos de lugar",
      parameters: [id, places, placesAttributes],
      method: "POST",
      model: "placeType",
    },
    {
      url: `${config.apiTrinidadUrl}review/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener comentarios",
      parameters: [places, routes, news, events],
      method: "POST",
      model: "review",
    },
    {
      url: `${config.apiTrinidadUrl}route/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener rutas",
      parameters: [ids, count, from, places, placesAttributes],
      method: "POST",
      model: "route",
    },
    {
      url: `${config.apiTrinidadUrl}route/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener una ruta",
      parameters: [id, places, placesAttributes],
      method: "POST",
      model: "route",
    },
    {
      url: `${config.apiTrinidadUrl}survey/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener formularios",
      parameters: [ids, count, from, attributes],
      method: "POST",
      model: "survey",
    },
    {
      url: `${config.apiTrinidadUrl}survey/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener un formulario",
      parameters: [id, attributes],
      method: "POST",
      model: "survey",
    },
    {
      url: `${config.apiTrinidadUrl}text/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener textos",
      parameters: [id],
      method: "POST",
      model: "text",
    },
  ];

  const getPoints = [
    {
      url: `${config.apiTrinidadUrl}campaign/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener campañas",
      parameters: [count, from],
      method: "GET",
      model: "campaign",
    },
    {
      url: `${config.apiTrinidadUrl}campaign/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener una campaña",
      parameters: [id],
      method: "GET",
      model: "campaign",
    },
    {
      url: `${config.apiTrinidadUrl}event/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener eventos",
      parameters: [count, from],
      method: "GET",
      model: "event",
    },
    {
      url: `${config.apiTrinidadUrl}event/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener un evento",
      parameters: [id],
      method: "GET",
      model: "event",
    },
    {
      url: `${config.apiTrinidadUrl}news/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener noticias",
      parameters: [count, from],
      method: "GET",
      model: "news",
    },
    {
      url: `${config.apiTrinidadUrl}news/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener una noticia",
      parameters: [id],
      method: "GET",
      model: "news",
    },
    {
      url: `${config.apiTrinidadUrl}place/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener lugares",
      parameters: [count, from, routes, placeTypes],
      method: "GET",
      model: "place",
    },
    {
      url: `${config.apiTrinidadUrl}place/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener un lugar",
      parameters: [id, routes, placeTypes],
      method: "GET",
      model: "place",
    },
    {
      url: `${config.apiTrinidadUrl}place-type/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener tipos de lugares",
      parameters: [count, from, places],
      method: "GET",
      model: "placeType",
    },
    {
      url: `${config.apiTrinidadUrl}place-type/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener un tipo de lugar",
      parameters: [id, places],
      method: "GET",
      model: "placeType",
    },
    {
      url: `${config.apiTrinidadUrl}review/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener comentarios",
      parameters: [places, routes, news, events],
      method: "GET",
      model: "review",
    },
    {
      url: `${config.apiTrinidadUrl}route/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener rutas",
      parameters: [count, from, places],
      method: "GET",
      model: "route",
    },
    {
      url: `${config.apiTrinidadUrl}route/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener una ruta",
      parameters: [id, places],
      method: "GET",
      model: "route",
    },
    {
      url: `${config.apiTrinidadUrl}survey/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener formularios",
      parameters: [count, from],
      method: "GET",
      model: "survey",
    },
    {
      url: `${config.apiTrinidadUrl}survey/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener un formulario",
      parameters: [id],
      method: "GET",
      model: "survey",
    },
    {
      url: `${config.apiTrinidadUrl}text/get`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener textos",
      parameters: [id],
      method: "GET",
      model: "text",
    },
  ];

  return (
    <SitoContainer
      alignItems="center"
      flexDirection="column"
      sx={{ width: "100%" }}
    >
      <Tooltip title={mode ? "Modo Oscuro" : "Modo Claro"}>
        <RadialButton
          sx={{
            marginTop: 0,
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 20,
            transition: "top 500ms ease",
          }}
          onClick={toggleMode}
          icon={mode ? <DarkModeIcon /> : <LightModeIcon />}
        />
      </Tooltip>
      <TabView
        value={tab}
        onChange={handleTab}
        tabs={["GET", "POST"]}
        content={[
          <SitoContainer flexDirection="column" alignItems="center">
            {getPoints.map((item, i) => (
              <EndPointCell
                endPoint={item}
                key={i}
                mode={mode}
                model={models[item.model]}
              />
            ))}
          </SitoContainer>,
          <SitoContainer flexDirection="column" alignItems="center">
            {postPoints.map((item, i) => (
              <EndPointCell
                endPoint={item}
                key={i}
                mode={mode}
                model={models[item.model]}
              />
            ))}
          </SitoContainer>,
        ]}
      />
    </SitoContainer>
  );
};

Trinidad.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired,
};

export default Trinidad;
