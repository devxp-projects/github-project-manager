import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  const [light, setLight] = useState(true);
  const theme = createTheme({
    palette: {
      mode: light ? 'light' : 'dark',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: light ? '#3765DC' : '#000',
          },
        },
      },
    },
  });

  const themeToggle = () => {
    setLight((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Welcome to project-manager!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
