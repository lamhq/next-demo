import React from 'react';
import axios from 'axios';

import ApiContext from '../contexts/api';
import { useIdentity } from '../../common/identity';
import { API_URL } from '../../config';
import { GetProfileFn, LoginFn, LogOutFn } from '../types';
import { Identity } from '../../common/identity/types';
import { User } from '../../types/user';

/**
 * Provide helper functions to access backend api
 */
const ApiProvider: React.FC = ({ children }) => {
  const [identity, setIdentity] = useIdentity();
  const http = axios.create({ baseURL: API_URL });

  // attach authentication header to http request
  const setAuthHeader = React.useCallback(() => {
    const authHeader = identity ? `Bearer ${identity.token}` : '';
    http.defaults.headers.common.Authorization = authHeader;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identity]);

  const logout: LogOutFn = () => {
    setIdentity(undefined);
  };

  const login: LoginFn = async (email, password) => {
    const resp = await http.post<Identity>('/auth/user/tokens', {
      email,
      password,
    });
    return resp.data;
  };

  const getProfile: GetProfileFn = async () => {
    const resp = await http.get<User>('/user/accounts/mine');
    return resp.data;
  };

  const contextValue = {
    login,
    logout,
    getProfile,
  };

  React.useEffect(() => {
    setAuthHeader();
  }, [setAuthHeader]);
  setAuthHeader();

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
