import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";

/**
 * Contenu de la présentation générale
 */
function BoxHero() {
  const { VITE_LINKEDIN_URL } = import.meta.env;

  // ----------------------------------------------------------------------

  return (
    <Box
      sx={{
        py: 12,
        width: "100%",
        backgroundImage: "url('/assets/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          component={motion.h1}
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Kared Dev
        </Typography>

        <Typography
          component={motion.h2}
          variant="h5"
          sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Deux développeurs passionnés, déterminés à transformer vos idées en solutions digitales
          performantes.
        </Typography>

        <Button
          variant="contained"
          size="large"
          color="primary"
          startIcon={<LaunchIcon />}
          component={motion.a}
          href={VITE_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          sx={{ "&:hover": { color: "inherit" } }}
        >
          Contactez-nous
        </Button>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export default BoxHero;
