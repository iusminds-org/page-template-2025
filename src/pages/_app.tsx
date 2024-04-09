import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/main.css';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Access the API key
  console.log(process.env);
  const apiKey = process.env.GDRIVE_KEY;
  return <Component {...pageProps} router={router} apiKey={apiKey} />;
};

export default MyApp;
