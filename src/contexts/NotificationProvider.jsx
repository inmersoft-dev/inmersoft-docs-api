/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const NotificationContext = React.createContext();

const notificationReducer = (notificationState, action) => {
  switch (action.type) {
    case "hide":
      return {
        visible: false,
      };
    case "show":
      return {
        visible: true,
        ntype: action.ntype,
        text: action.text,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const NotificationProvider = ({ children }) => {
  const [notificationState, setNotificationState] = React.useReducer(
    notificationReducer,
    {
      visible: false,
    }
  );

  const value = { notificationState, setNotificationState };
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (context === undefined)
    throw new Error("notificationContext must be used within a Provider");
  return context;
};

export { NotificationProvider, useNotification };
