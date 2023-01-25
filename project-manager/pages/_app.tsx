// eslint-disable-line
import { Paper, Switch, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import useCustomTheme from './utils/theme';

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
