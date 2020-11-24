import { AxiosError } from 'axios';
import { ErrorResponse } from '../../types/common';
import { useAlert } from '../alert';
import { useIdentity } from '../identity';

export type HandleAxiosError = (error: AxiosError<ErrorResponse>) => void;

export default function useHttpErrorHandler(): HandleAxiosError {
  const { alertError } = useAlert();
  const [, setIdentity] = useIdentity();

  return (error: AxiosError<ErrorResponse>) => {
    if (!error.isAxiosError) return;

    let { message } = error;
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 504:
          message = 'Request timeout';
          break;

        case 400:
          if (data.details) {
            message = 'Invalid user input';
          } else {
            ({ message } = data);
          }
          break;

        case 401:
          message = 'Wrong email or password';
          setIdentity(undefined);
          break;

        case 403:
          message = "You don't have permission to perform this action";
          break;

        default:
          ({ message } = data);
          break;
      }
    } else if (error.message === 'Network Error') {
      message = 'No Internet. Please check your network connection';
    }

    alertError(message);
  };
}
