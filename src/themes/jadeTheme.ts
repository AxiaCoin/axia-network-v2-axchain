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
        background: "#FFFFFF !important",
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
      light: "#F8F9FA",
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
      default: '#212B43',
      paper: '#171F32',
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
    MuiAppBar: {
      root: {
        background: "#171F32 !important",
      },
    },
  },
}));

export default {
  darkTheme,
  lightTheme,
};
