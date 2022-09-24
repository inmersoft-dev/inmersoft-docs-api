import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// services
import { campaignList } from "./services/campaign/get";
import { eventList } from "./services/events/get";
import { newsList } from "./services/news/get";
import { placeList } from "./services/places/get";
import { placeTypeList } from "./services/placeTypes/get";
import { reviewList } from "./services/reviews/get";
import { routeList } from "./services/routes/get";
import { surveyList } from "./services/surveys/get";
import { textList } from "./services/texts/get";

// @mui icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// @mui components
import { Tooltip } from "@mui/material";

// own components
import EndpointCell from "../../components/EndpointCell/EndpointCell";
import RadialButton from "../../components/RadialButton/RadialButton";

import config from "../../config";

const Trinidad = (props) => {
  const { toggleMode, mode } = props;

  const endPoints = [
    {
      url: `${config.apiTrinidadUrl}campaign/list`,
      function: campaignList,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener campañas",
    },
    {
      url: `${config.apiTrinidadUrl}event/list`,
      function: eventList,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener eventos",
    },
    {
      url: `${config.apiTrinidadUrl}news/list`,
      function: newsList,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener noticias",
    },
    {
      url: `${config.apiTrinidadUrl}place/list`,
      function: placeList,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener lugares",
    },
    {
      url: `${config.apiTrinidadUrl}place-type/list`,
      function: placeTypeList,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener tipos de lugares",
    },
    {
      url: `${config.apiTrinidadUrl}review/list`,
      function: reviewList,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener comentarios",
    },
    {
      url: `${config.apiTrinidadUrl}route/list`,
      function: routeList,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener rutas",
    },
    {
      url: `${config.apiTrinidadUrl}survey/list`,
      function: surveyList,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener formularios",
    },
    {
      url: `${config.apiTrinidadUrl}text/list`,
      function: textList,
      lastUpdate: new Date().toLocaleString(),
      description: "GET / Optener textos",
    },
  ];

  return (
    <SitoContainer alignItems="center" flexDirection="column" fullWidth>
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
      {endPoints.map((item, i) => (
        <EndpointCell endPoint={item} key={i} />
      ))}
    </SitoContainer>
  );
};

Trinidad.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired,
};

export default Trinidad;
