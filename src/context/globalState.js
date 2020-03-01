import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const INITIAL_STATE = {
  deviceWidth: 0.92 * window.innerHeight * 0.85 * 0.5 * 0.868,
  deviceHeight: 0.92 * window.innerHeight * 0.85 * 0.94,
  qrcodeUrl: ''
};

// Create context
export const GlobalContext = createContext(INITIAL_STATE);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  /**
   * Action
   */
  const onWindowResize = () => {
    dispatch({
      type: 'WINDOW_RESIZE'
    });
  };

  const generateQRCode = msgId => {
    console.log('msgId: ', msgId);
    dispatch({
      type: 'GENERATE_QRCODE',
      payload: msgId
    });
  };

  const clearQRCode = () => {
    dispatch({
      type: 'CLEAR_QRCODE'
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        onWindowResize,
        generateQRCode,
        clearQRCode
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
