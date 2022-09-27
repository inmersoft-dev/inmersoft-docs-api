/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const DeviceContext = createContext();

export const DeviceEnum = {
  Mobile: 1,
  Web: 2,
};

const deviceReducer = (deviceState, action) => {
  switch (action.type) {
    case "toMobile":
      return {
        device: DeviceEnum.Mobile,
      };
    case "toWeb":
      return {
        device: DeviceEnum.Web,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const DeviceProvider = ({ children }) => {
  const [deviceState, setDeviceState] = useReducer(deviceReducer, {
    device: DeviceEnum.Web,
  });

  const value = { deviceState, setDeviceState };
  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
};

DeviceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useDevice = () => {
  const context = useContext(DeviceContext);
  if (context === undefined)
    throw new Error("deviceContext must be used within a Provider");
  return context;
};

export { DeviceProvider, useDevice };
