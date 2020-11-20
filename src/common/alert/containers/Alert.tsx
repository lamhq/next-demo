import React from 'react';
import BsAlert from 'react-bootstrap/Alert';
import useAlert from '../hooks/useAlert';

const Alert: React.FC = () => {
  const { alert, closeAlert } = useAlert();

  if (!alert) return null;
  const { variant, message } = alert;
  return (
    <BsAlert variant={variant} dismissible onClose={closeAlert}>
      {message}
    </BsAlert>
  );
};

export default Alert;
