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
  news,
  places,
  placesAttributes,
  placeTypes,
  placeTypesAttributes,
  routes,
  routesAttributes,
} from "../../utils/inputPrefab";
import TabView from "../../components/TabView/TabView";

const Trinidad = (props) => {
  const { toggleMode, mode } = props;

  const [tab, setTab] = useState(0);
  const handleTab = (e, newTab) => setTab(newTab);

  const postPoints = [
    {
      url: `${config.apiTrinidadUrl}campaign/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener campañas",
      parameters: [id, count, from, attributes],
      method: "POST",
    },
    {
      url: `${config.apiTrinidadUrl}event/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener eventos",
      parameters: [id, count, from, attributes],
      method: "POST",
    },
    {
      url: `${config.apiTrinidadUrl}news/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener noticias",
      parameters: [id, count, from, attributes],
      method: "POST",
    },
    {
      url: `${config.apiTrinidadUrl}place/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener lugares",
      parameters: [
        id,
        count,
        from,
        routes,
        routesAttributes,
        placeTypes,
        placeTypesAttributes,
      ],
      method: "POST",
    },
    {
      url: `${config.apiTrinidadUrl}place-type/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener tipos de lugares",
      parameters: [id, count, from, places, placesAttributes],
      method: "POST",
    },
    {
      url: `${config.apiTrinidadUrl}review/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener comentarios",
      parameters: [places, routes, news, events],
      method: "POST",
    },
    {
      url: `${config.apiTrinidadUrl}route/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener rutas",
      parameters: [id, count, from, places, placesAttributes],
      method: "POST",
    },
    {
      url: `${config.apiTrinidadUrl}survey/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener formularios",
      parameters: [id, count, from, attributes],
      method: "POST",
    },
    {
      url: `${config.apiTrinidadUrl}text/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "POST / Optener textos",
      parameters: [id],
      method: "POST",
    },
  ];

  const getPoints = [
    {
      url: `${config.apiTrinidadUrl}campaign/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener campañas",
      parameters: [id, count, from],
      method: "GET",
    },
    {
      url: `${config.apiTrinidadUrl}event/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener eventos",
      parameters: [id, count, from],
      method: "GET",
    },
    {
      url: `${config.apiTrinidadUrl}news/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener noticias",
      parameters: [id, count, from],
      method: "GET",
    },
    {
      url: `${config.apiTrinidadUrl}place/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener lugares",
      parameters: [id, count, from, routes, placeTypes],
      method: "GET",
    },
    {
      url: `${config.apiTrinidadUrl}place-type/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener tipos de lugares",
      parameters: [id, count, from, places],
      method: "GET",
    },
    {
      url: `${config.apiTrinidadUrl}review/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener comentarios",
      parameters: [places, routes, news, events],
      method: "GET",
    },
    {
      url: `${config.apiTrinidadUrl}route/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener rutas",
      parameters: [id, count, from, places],
      method: "GET",
    },
    {
      url: `${config.apiTrinidadUrl}survey/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener formularios",
      parameters: [id, count, from],
      method: "GET",
    },
    {
      url: `${config.apiTrinidadUrl}text/list`,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener textos",
      parameters: [id],
      method: "GET",
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
              <EndPointCell endPoint={item} key={i} />
            ))}
          </SitoContainer>,
          <SitoContainer flexDirection="column" alignItems="center">
            {postPoints.map((item, i) => (
              <EndPointCell endPoint={item} key={i} />
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
