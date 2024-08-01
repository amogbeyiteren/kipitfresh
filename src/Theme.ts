// theme.js
import { createTheme } from '@mui/material/styles';
//for material UI elements only
const MaterialUiTheme = createTheme({
  palette: {
    primary: {
      main: '#173e1f',
    },
    text: {
      primary: '#173e1f',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#173e1f',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          color: '#173e1f',
        },
      },
    },
  },
});

export default MaterialUiTheme;
