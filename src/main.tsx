import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";
import "./index.css";

// ----------------------------------------------------------------------

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6425eb",
    },
    background: {
      default: "#0d1117",
      paper: "#161b22",
    },
  },
});

// ----------------------------------------------------------------------

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
