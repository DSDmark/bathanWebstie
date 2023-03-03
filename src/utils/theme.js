import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textTransform: "uppercase",
        }
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          justifyContent: "space-around",
          alignItems: "center",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          color: "#fff",
          fontFamily: "NTR",
          background: "#F56565",
          color: "#fff",
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: 20,
          fontFamily: "NTR",
        }
      }
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#d97676',
    },
    secondary: {
      main: '#ff9800',
    },
    warning: {
      main: '#000000',
    },
  },
});


export default theme
