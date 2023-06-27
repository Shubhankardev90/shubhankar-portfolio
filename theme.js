// theme.js

import { createTheme } from '@mui/material/styles';

// Customize the theme by modifying the values
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000', // Replace with your primary color
    },
    secondary: {
      main: '#00ff00', // Replace with your secondary color
    },
  },
  // Add any additional theme configuration options
});

export default theme;
