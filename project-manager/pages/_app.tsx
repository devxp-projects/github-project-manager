// eslint-disable-line

import { AppProps } from 'next/app';
import Head from 'next/head';
import useCustomTheme from '../utils/theme';
import './styles.css';


function CustomApp({ Component, pageProps }: AppProps) {
  const [theme, themeToggle] = useCustomTheme();
  return (
    <>
      <Head>
        <title>Welcome to project-manager!</title>
      </Head>
      <main className="app">
        <Component {...pageProps}/>
      </main>
    </>
  );
}

export default CustomApp;