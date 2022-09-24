const { REACT_APP_API_TRINIDAD_URL, REACT_APP_JWT_KEY } = process.env;

console.log(process.env);

const config = {
  apiTrinidadUrl: REACT_APP_API_TRINIDAD_URL,
  basicKey: REACT_APP_JWT_KEY,
};

export default config;
