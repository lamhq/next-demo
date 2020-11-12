/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

const App = ({ Component, pageProps }: AppProps): ReactElement<any, any> | null => {
  return <Component {...pageProps} />;
};

export default App;
