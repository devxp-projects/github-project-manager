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
          root: ({ ownerState }) => ({
            ...(ownerState.color === 'primary' && {
              backgroundColor: '#3765DC',
              color: 'white',
              '&:hover': {
                backgroundColor: '#3656A7',
              },
              '&:disables': {
                backgroundColor: '#D7D7D7',
              },
            }),
            ...(ownerState.color === 'secondary' && {
              backgroundColor: '#F5F5F5',
              color: 'black',
            }),
          }),
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
