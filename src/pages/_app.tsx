import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return <Component {...pageProps} router={router} />;
};

export default MyApp;
