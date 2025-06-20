import { useCallback, useEffect, useMemo } from "react";
import bowser from "bowser";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Page from "@kared/components/Page";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

/**
 * Page de présentation de l'application Kared Fit
 */
function PageKaredFit() {
  const APP_NAME = "Kared Fit";
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.kared.karedfit";
  const APP_STORE_URL = "https://apps.apple.com/fr/app/kared-fit/id6739947899?platform=iphone";

  // ----------------------------------------------------------------------

  const parser = useMemo(() => bowser.getParser(window.navigator.userAgent), []);

  const isMobile = useMemo(() => {
    const type = parser.getPlatformType(); // "mobile", "tablet", "desktop", "tv", etc.
    return type === "mobile" || type === "tablet";
  }, [parser]);

  const isIOS = parser.getOSName() === "iOS";

  const getIntentUrl = useCallback(() => {
    const currentPath = window.location.pathname + window.location.search;
    const encodedFallbackUrl = encodeURIComponent(window.location.href);

    if (isIOS) {
      return `karedfit://${currentPath}`;
    }

    return `intent://kared-dev.fr${currentPath}#Intent;scheme=https;package=com.kared.karedfit;S.browser_fallback_url=${encodedFallbackUrl};end;`;
  }, [isIOS]);

  const openApp = useCallback(() => {
    if (isMobile) {
      window.location.href = getIntentUrl();
    }
  }, [getIntentUrl, isMobile]);

  // ----------------------------------------------------------------------

  useEffect(() => {
    const timer = setTimeout(openApp, 500);
    return () => clearTimeout(timer);
  }, [openApp]);

  // ----------------------------------------------------------------------

  return (
    <Page title={APP_NAME} sx={{ py: 10 }}>
      <Grid size={{ xs: 10 }} offset={{ xs: 1 }}>
        <Stack spacing={4} sx={{ height: "100%", width: "100%" }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            {APP_NAME}
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{ mb: 4, whiteSpace: "pre-line" }}
          >
            {`Planifie tes séances, défie tes amis\net évoluez ensemble en temps réel.`}
          </Typography>

          {/* Boutons de téléchargements */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mb: 4,
              width: "100%",
            }}
          >
            <Button
              component="a"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 0 }}
            >
              <img src="/assets/GetItOnGooglePlay.png" alt="Google play" height="48" width="150" />
            </Button>

            <Button
              component="a"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 0 }}
            >
              <img src="/assets/GetItOnAppleStore.svg" alt="Apple store" height="58" width="150" />
            </Button>
          </Box>
        </Stack>
      </Grid>

      {/* Bouton ouvrir l'app (mobile seulement) */}
      {isMobile && (
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <Button variant="contained" color="primary" onClick={openApp}>
            Ouvrir l'application
          </Button>
        </Box>
      )}
    </Page>
  );
}

// ----------------------------------------------------------------------

export default PageKaredFit;
