/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// own components
import EndPointCell from "../../components/EndPointCell/EndPointCell";
import BigLoading from "../../components/BigLoading/BigLoading";
import TabView from "../../components/TabView/TabView";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";

// @mui components
// import { Tooltip, Fab } from "@mui/material";

// @mui icons
// import WebAssetIcon from "@mui/icons-material/WebAsset";
// import SmartphoneIcon from "@mui/icons-material/Smartphone";

// context
import { DeviceEnum, useDevice } from "../../contexts/DeviceProvider";

// config
import config from "../../config";

// images
import trinidad from "../../assets/images/trinidad.webp";

const Trinidad = (props) => {
  const { mode } = props;
  const location = useLocation();

  const { deviceState } = useDevice();

  /* const toggleDevice = () =>
    setDeviceState({
      type: deviceState.device === DeviceEnum.Mobile ? "toWeb" : "toMobile",
    }); */

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

  const [webGetPoints, setWebGetPoints] = useState([]);
  const [webPostPoints, setWebPostPoints] = useState([]);
  const [, setMobileGetPoints] = useState([]);
  const [, setMobilePostPoints] = useState([]);
  const [webModels, setWebModels] = useState([]);
  const [, setMobileModels] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${config.apiTrinidadUrl}docs/fetch`);
      const data = await response.data;
      setWebGetPoints(data.webGetPoints);
      setMobileGetPoints(data.mobileGetPoints);
      setWebPostPoints(data.webPostPoints);
      setMobilePostPoints(data.mobilePostPoints);
      setWebModels(data.webModels);
      setMobileModels(data.mobileModels);
    } catch (err) {
      setWebGetPoints(-1);
      setWebPostPoints(-1);
      setWebModels(-1);
      setWebGetPoints(-1);
      setWebPostPoints(-1);
      setWebModels(-1);
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
      sx={{ width: "100%", paddingTop: "65px" }}
    >
      {/* <Tooltip
        title={
          deviceState.device === DeviceEnum.Mobile
            ? "Cliente Móvil"
            : "Cliente Web"
        }
      >
        <Fab
          sx={{ position: "fixed", left: "20px", bottom: "20px" }}
          size="small"
          color="primary"
          aria-label="add"
          onClick={toggleDevice}
        >
          {deviceState.device === DeviceEnum.Mobile && <SmartphoneIcon />}
          {deviceState.device === DeviceEnum.Web && <WebAssetIcon />}
        </Fab>
      </Tooltip> */}
      <BigLoading visible={loading} logo={trinidad} />
      {!loading && (
        <TabView
          value={tab}
          onChange={handleTab}
          tabs={["GET", "POST"]}
          content={[
            <SitoContainer flexDirection="column" alignItems="center">
              {/* Web GET */}
              {deviceState.device === DeviceEnum.Web &&
                webGetPoints.length > 0 &&
                webGetPoints.map((item, i) => (
                  <EndPointCell
                    endPoint={item}
                    key={i}
                    mode={mode}
                    model={{ web: webModels[item.model] }}
                    parent={config.apiTrinidadWebUrl}
                  />
                ))}
              {deviceState.device === DeviceEnum.Web && webGetPoints === -1 && (
                <Error onAction={retry} />
              )}
              {deviceState.device === DeviceEnum.Web &&
                webGetPoints.length === 0 && <Empty />}
              {/* Mobile GET */}
              {/* deviceState.device === DeviceEnum.Mobile &&
                mobileGetPoints.length > 0 &&
                mobileGetPoints.map((item, i) => (
                  <EndPointCell
                    endPoint={item}
                    key={i}
                    mode={mode}
                    model={mobileModels[item.model]}
                    parent={config.apiTrinidadMobileUrl}
                  />
                )) */}
              {/* deviceState.device === DeviceEnum.Mobile &&
                mobileGetPoints === -1 && <Error onAction={retry} /> */}
              {/* deviceState.device === DeviceEnum.Mobile &&
                mobileGetPoints.length === 0 && <Empty /> */}
            </SitoContainer>,
            <SitoContainer flexDirection="column" alignItems="center">
              {/* Web Post */}
              {deviceState.device === DeviceEnum.Web &&
                webPostPoints.length > 0 &&
                webPostPoints.map((item, i) => (
                  <EndPointCell
                    endPoint={item}
                    key={i}
                    mode={mode}
                    model={webModels[item.model]}
                    parent={config.apiTrinidadWebUrl}
                  />
                ))}
              {deviceState.device === DeviceEnum.Web &&
                webPostPoints === -1 && <Error onAction={retry} />}
              {deviceState.device === DeviceEnum.Web &&
                webPostPoints.length === 0 && <Empty />}
              {/* Mobile POST */}
              {/* deviceState.device === DeviceEnum.MobileF &&
                mobilePostPoints.length > 0 &&
                mobilePostPoints.map((item, i) => (
                  <EndPointCell
                    endPoint={item}
                    key={i}
                    mode={mode}
                    model={mobileModels[item.model]}
                    parent={config.apiTrinidadMobileUrl}
                  />
                )) */}
              {/* deviceState.device === DeviceEnum.Mobile &&
                mobilePostPoints === -1 && <Error onAction={retry} /> */}
              {/* deviceState.device === DeviceEnum.Mobile &&
                mobilePostPoints.length === 0 && <Empty /> */}
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
