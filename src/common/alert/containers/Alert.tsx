import React from 'react';
import { Alert as BsAlert } from 'reactstrap';
import useAlert from '../hooks/useAlert';

const Alert: React.FC = () => {
  const { alert, closeAlert } = useAlert();

  if (!alert) return null;
  const { variant, message } = alert;
  return (
    <BsAlert color={variant} isOpen={!!alert} toggle={closeAlert}>
      {message}
    </BsAlert>
  );
};

export default Alert;
