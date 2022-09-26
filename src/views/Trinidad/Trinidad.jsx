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

// config
import config from "../../config";

// images
import trinidad from "../../assets/images/trinidad.webp";

const Trinidad = (props) => {
  const { mode } = props;
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

  const [webGetPoints, setWebGetPoints] = useState([]);
  const [webPostPoints, setWebPostPoints] = useState([]);
  const [mobileGetPoints, setMobileGetPoints] = useState([]);
  const [mobilePostPoints, setMobilePostPoints] = useState([]);
  const [webModels, setWebModels] = useState([]);
  const [mobileModels, setMobileModels] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${config.apiTrinidadUrl}docs/fetch`);
      const data = await response.data;
      console.log("data", data);
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

  const [bigTab, setBigTab] = useState(0);
  const handleBigTab = (e, newTab) => setBigTab(newTab);

  return (
    <SitoContainer
      alignItems="center"
      flexDirection="column"
      sx={{ width: "100%", paddingTop: "40px" }}
    >
      <BigLoading visible={loading} logo={trinidad} />
      {!loading && (
        <TabView
          tabs={["Web", "Móvil"]}
          value={bigTab}
          sx={{
            "& .css-19kzrtu": {
              padding: 0,
            },
          }}
          onChange={handleBigTab}
          content={[
            <TabView
              value={tab}
              onChange={handleTab}
              tabs={["GET", "POST"]}
              content={[
                <SitoContainer flexDirection="column" alignItems="center">
                  {webGetPoints.length > 0 &&
                    webGetPoints.map((item, i) => (
                      <EndPointCell
                        endPoint={item}
                        key={i}
                        mode={mode}
                        model={webModels[item.model]}
                        parent={config.apiTrinidadUrl}
                      />
                    ))}
                  {webGetPoints === -1 && <Error onAction={retry} />}
                  {webGetPoints.length === 0 && <Empty />}
                </SitoContainer>,
                <SitoContainer flexDirection="column" alignItems="center">
                  {webPostPoints.length > 0 &&
                    webPostPoints.map((item, i) => (
                      <EndPointCell
                        endPoint={item}
                        key={i}
                        mode={mode}
                        model={webModels[item.model]}
                        parent={config.apiTrinidadUrl}
                      />
                    ))}
                  {webGetPoints === -1 && <Error onAction={retry} />}
                  {webGetPoints.length === 0 && <Empty />}
                </SitoContainer>,
              ]}
            />,
            <TabView
              value={tab}
              onChange={handleTab}
              tabs={["GET", "POST"]}
              content={[
                <SitoContainer flexDirection="column" alignItems="center">
                  {mobileGetPoints.length > 0 &&
                    mobileGetPoints.map((item, i) => (
                      <EndPointCell
                        endPoint={item}
                        key={i}
                        mode={mode}
                        model={mobileModels[item.model]}
                        parent={config.apiTrinidadUrl}
                      />
                    ))}
                  {mobileGetPoints === -1 && <Error onAction={retry} />}
                  {mobileGetPoints.length === 0 && <Empty />}
                </SitoContainer>,
                <SitoContainer flexDirection="column" alignItems="center">
                  {mobilePostPoints.length > 0 &&
                    mobilePostPoints.map((item, i) => (
                      <EndPointCell
                        endPoint={item}
                        key={i}
                        mode={mode}
                        model={mobileModels[item.model]}
                        parent={config.apiTrinidadUrl}
                      />
                    ))}
                  {mobileGetPoints === -1 && <Error onAction={retry} />}
                  {mobileGetPoints.length === 0 && <Empty />}
                </SitoContainer>,
              ]}
            />,
          ]}
        ></TabView>
      )}
    </SitoContainer>
  );
};

Trinidad.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired,
};

export default Trinidad;
