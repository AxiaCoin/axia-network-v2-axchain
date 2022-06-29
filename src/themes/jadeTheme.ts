import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";


export const lightTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: "#87CEEB !important",
      },
    },
  },
  /*
  palette: {
    background: {
      default: "#fff",
    },
  },*/
  
  palette: {
    type: "light",
    primary: {
      light: "#53CBC9",
      main: "#1E90FF",
      //dark: "#E0FFFF",
      contrastText: "#fff",
    },
    background: {
      paper: "#4682B4",
    },
  },
}));

export const darkTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  palette: {
    type: "dark",
    background: {
      default: grey[900],
      paper: grey[800],
    },
  },
  overrides: {
    MuiTable: {
      root: {
        background: "transparent !important",
      },
    },
    MuiTypography: {
      root: {
        color: grey[400],
      },
    },
  },
}));

export default {
  darkTheme,
  lightTheme,
};
