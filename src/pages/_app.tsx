import { AppProps } from 'next/app';

import '../styles/main.css';

import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;
