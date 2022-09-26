/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom";
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
import BigLoading from "../../components/BigLoading/BigLoading";
import TabView from "../../components/TabView/TabView";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";

// config
import config from "../../config";

// images
import trinidad from "../../assets/images/trinidad.webp";

const Trinidad = (props) => {
  const { toggleMode, mode } = props;
  const location = useLocation();

  const [tab, setTab] = useState(0);
  const handleTab = (e, newTab) => setTab(newTab);

  useEffect(() => {
    const { hash } = location;
    if (hash && hash.length) {
      const parsedHash = hash.substring(1);
      switch (parsedHash) {
        case "POST":
          setTab(1);
          break;
        default: //* GET
          setTab(0);
          break;
      }
    }
  }, [location]);

  const [getPoints, setGetPoints] = useState([]);
  const [postPoints, setPostPoints] = useState([]);
  const [models, setModels] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${config.apiTrinidadUrl}docs/fetch`);
      const data = await response.data;
      setGetPoints(data.getPoints);
      setPostPoints(data.postPoints);
      setModels(data.models);
    } catch (err) {
      setGetPoints(-1);
      setPostPoints(-1);
      setModels(-1);
      console.log(err);
    }
    setLoading(false);
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
      <BigLoading visible={loading} logo={trinidad} />
      {!loading && (
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
                    parent={config.apiTrinidadUrl}
                  />
                ))}
              {getPoints === -1 && <Error onAction={retry} />}
              {getPoints.length === 0 && <Empty />}
            </SitoContainer>,
            <SitoContainer flexDirection="column" alignItems="center">
              {postPoints.length > 0 &&
                postPoints.map((item, i) => (
                  <EndPointCell
                    endPoint={item}
                    key={i}
                    mode={mode}
                    model={models[item.model]}
                    parent={config.apiTrinidadUrl}
                  />
                ))}
              {getPoints === -1 && <Error onAction={retry} />}
              {getPoints.length === 0 && <Empty />}
            </SitoContainer>,
          ]}
        />
      )}
    </SitoContainer>
  );
};

Trinidad.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired,
};

export default Trinidad;
