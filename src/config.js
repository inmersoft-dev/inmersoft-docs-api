const {
  REACT_APP_API_TRINIDAD_URL,
  REACT_APP_API_TRINIDAD_WEB_URL,
  REACT_APP_API_TRINIDAD_MOBILE_URL,
  REACT_APP_JWT_KEY,
} = process.env;

const config = {
  apiTrinidadUrl: REACT_APP_API_TRINIDAD_URL,
  apiTrinidadWebUrl: REACT_APP_API_TRINIDAD_WEB_URL,
  apiTrinidadMobileUrl: REACT_APP_API_TRINIDAD_MOBILE_URL,
  basicKey: REACT_APP_JWT_KEY,
};

export default config;
