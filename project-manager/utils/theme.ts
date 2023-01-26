import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
const useCustomTheme = () => {
  const [light, setLight] = useState<boolean>(true);
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
  return [theme, themeToggle] as const;
};

export default useCustomTheme;
