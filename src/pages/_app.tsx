/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import { IdentityProvider } from '../common/identity';
import { AlertProvider } from '../common/alert';

const App = ({ Component, pageProps }: AppProps): ReactElement<any, any> | null => {
  return (
    <IdentityProvider>
      <AlertProvider>
        <Component {...pageProps} />
      </AlertProvider>
    </IdentityProvider>
  );
};

export default App;
