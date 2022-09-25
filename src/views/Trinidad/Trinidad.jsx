/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import axios from "axios";

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
import TabView from "../../components/TabView/TabView";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";

// models
import models from "./models/models";

// contexts
import { useNotification } from "../../contexts/NotificationProvider";

// config
import config from "../../config";

const Trinidad = (props) => {
  const { toggleMode, mode } = props;

  const [tab, setTab] = useState(0);
  const handleTab = (e, newTab) => setTab(newTab);

  const [getPoints, setGetPoints] = useState([]);
  const [postPoints, setPostPoints] = useState([]);

  const { setNotificationState } = useNotification();

  const fetch = async () => {
    try {
      const response = await axios.get(`${config.apiTrinidadUrl}docs/fetch`);
      const data = await response.data;
      setGetPoints(data.getPoints);
      setPostPoints(data.postPoints);
    } catch (err) {
      setGetPoints(-1);
      setPostPoints(-1);
      console.log(err);
      setNotificationState({
        type: "show",
        ntype: "error",
        message: "No se ha podido conectar",
      });
    }
  };

  const retry = () => fetch();

  useEffect(() => {
    fetch();
  }, []);

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
            {getPoints.length > 0 &&
              getPoints.map((item, i) => (
                <EndPointCell
                  endPoint={item}
                  key={i}
                  mode={mode}
                  model={models[item.model]}
                />
              ))}
            {getPoints === -1 && <Error onAction={retry} />}
            {getPoints.length === 0 && <Empty />}
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
            {getPoints === -1 && <Error onAction={retry} />}
            {getPoints.length === 0 && <Empty />}
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
