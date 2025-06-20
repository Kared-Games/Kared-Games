import { type ReactNode } from "react";
import { HeadProvider, Title } from "react-head";
import { type SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// ----------------------------------------------------------------------

type PageProps = {
  children: ReactNode;
  title: string;
  noAppBar?: boolean;
  sx?: SxProps;
};

/**
 * Composant Page qui permet de créer une page avec un titre et un appbar optionnel.
 * @param children - Les enfants du composant.
 * @param title - Le titre de la page.
 * @param noAppBar - Si true, l'appbar n'est pas affiché.
 * @param sx - Les styles du composant.
 */
function Page({ children, title, sx = {} }: PageProps) {
  const { VITE_APP_NAME } = import.meta.env;

  // ----------------------------------------------------------------------

  return (
    <>
      <HeadProvider>
        <Title>{`${title} | ${VITE_APP_NAME}`}</Title>
      </HeadProvider>

      <Box
        id="page-wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        {/* Contenu principal */}
        <Grid container id="page-container" component="main" sx={{ flexGrow: 1, ...sx }}>
          {children}
        </Grid>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 4,
            width: "100%",
            textAlign: "center",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} AlexDev — Tous droits réservés.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

export default Page;
