// eslint-disable-line
import { Paper, Switch, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import useCustomTheme from '../utils/theme';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const [theme, themeToggle] = useCustomTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <Switch onChange={themeToggle} />
          <Head>
            <title>Welcome to project-manager!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
