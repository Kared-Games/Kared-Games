import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";

/**
 * Contenu de la section de contact
 */
function BoxContact() {
  const { VITE_EMAIL_CONTACT } = import.meta.env;
  const subject = encodeURIComponent("Demande de contact");

  // ----------------------------------------------------------------------

  return (
    <Container sx={{ py: 8 }}>
      <Stack direction="column" spacing={4} alignItems="center">
        <Typography variant="h4" align="center">
          Envie de concrétiser votre projet ?
        </Typography>

        <Button
          component={motion.a}
          href={`mailto:${VITE_EMAIL_CONTACT}?subject=${subject}`}
          variant="contained"
          size="large"
          color="primary"
          startIcon={<EmailIcon />}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          sx={{ "&:hover": { color: "inherit" } }}
        >
          Discutons-en
        </Button>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

export default BoxContact;
