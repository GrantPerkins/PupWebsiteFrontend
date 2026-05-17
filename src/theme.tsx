import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d4589a',
    },
    secondary: {
      main: '#f9c0d9',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#222222',
      secondary: '#555555',
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});
