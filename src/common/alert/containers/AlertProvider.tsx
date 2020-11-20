import React from 'react';
import Context, { AlertContext } from '../contexts/alert';

const AlertProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<AlertContext['alert']>();

  function alertSuccess(message: string) {
    setState({
      variant: 'success',
      message,
    });
  }

  function alertError(message: string) {
    setState({
      variant: 'danger',
      message,
    });
  }

  function alertWarning(message: string) {
    setState({
      variant: 'warning',
      message,
    });
  }

  function closeAlert() {
    setState(undefined);
  }

  const contextVal = {
    alert: state,
    alertSuccess,
    alertError,
    alertWarning,
    closeAlert,
  };

  return <Context.Provider value={contextVal}>{children}</Context.Provider>;
};

export default AlertProvider;
