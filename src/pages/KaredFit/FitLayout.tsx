import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

/**
 * Theme for the Kared Fit layout.
 */
const fitTheme = createTheme({
  palette: {
    mode: "dark",
    error: {
      light: "#ff7b73",
      main: "#c03e34",
      dark: "#a32f26",
      contrastText: "#fff",
    },
    primary: {
      light: "#FF944D",
      main: "#c0722d",
      dark: "#7A3200",
      contrastText: "#000000",
    },
    secondary: {
      light: "#AFCBFF",
      main: "#6C8AE4",
      dark: "#3A5BA0",
      contrastText: "#000000",
    },
    background: {
      default: "radial-gradient(circle, rgba(2,2,47,1) 30%, rgba(2,7,27,1) 100%)",
      paper: "#0A0A3C",
    },
  },
});

/**
 * Layout for the Kared Fit page.
 */
const FitLayout = () => (
  <ThemeProvider theme={fitTheme}>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: {
          background: "radial-gradient(circle, rgba(2,2,47,1) 30%, rgba(2,7,27,1) 100%)",
        },
      }}
    />
    <Outlet />
  </ThemeProvider>
);

// ----------------------------------------------------------------------

export default FitLayout;
