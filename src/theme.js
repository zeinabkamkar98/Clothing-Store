import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fce4ec",
    },
    secondary: {
      main: "#ad1457",
    },
  },
  typography: {
    fontFamily: ["Fredoka One", "cursive"].join(","),
  },
});

theme = createTheme(theme, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {},
      },
    },
    MuiTabs: {
      defaultProps: {},
      styleOverrides: {
        root: {
          // backgroundColor: theme.palette.primary.main,
        },
      },
    },
    MuiTab: {
      defaultProps: {
        component: Link,
        color: "inherit",
        disableFocusRipple: "true",
      },
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#000",
          },
        },
      },
    },
    MuiBadge: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiButton: {
      defaultProps: {
        color: "secondary",
      },
    },
  },
});

export default theme;
