import type { ElementType } from "react";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CodeRounded from "@mui/icons-material/CodeRounded";
import PhoneIphoneRounded from "@mui/icons-material/PhoneIphoneRounded";
import LanguageRounded from "@mui/icons-material/LanguageRounded";

// ----------------------------------------------------------------------

type Service = {
  title: string;
  description: string;
  image?: string;
  icon: ElementType;
};

/**
 * Contenu des services proposés
 */
function BoxServices() {
  const services: Service[] = [
    {
      title: "Développement sur-mesure",
      description:
        "Solutions logicielles taillées à vos objectifs : robustes, évolutives et performantes.",
      icon: CodeRounded,
    },
    {
      title: "Applications mobiles",
      description:
        "Apps natives iOS & Android, rapides, fiables et centrées sur l'expérience utilisateur.",
      icon: PhoneIphoneRounded,
    },
    {
      title: "Applications web",
      description: "Expériences web fluides, sécurisées et naturellement bien référencées.",
      icon: LanguageRounded,
    },
  ];

  return (
    <Container sx={{ backgroundColor: "background.paper", py: 8, mb: 10 }}>
      <Stack direction="column" spacing={4} alignItems="center">
        <Typography variant="h4" component="h3" align="center" gutterBottom>
          Nos expertises
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{ maxWidth: 600, mx: "auto", textAlign: "center" }}
        >
          Grâce à notre créativité et à notre expertise, nous concevons des expériences numériques
          mémorables, avec sérieux, enthousiasme et une pointe d'audace.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service, idx) => (
            <Grid size={{ xs: 12, sm: 4 }} key={idx}>
              <Card
                component={motion.div}
                sx={{ height: "100%", backgroundColor: "background.paper" }}
                whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <CardMedia
                  component={service.icon ? "div" : "img"}
                  image={service.image}
                  sx={{
                    height: 124,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {service.icon && <service.icon sx={{ fontSize: 80, color: "primary.main" }} />}
                </CardMedia>

                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom align="center">
                    {service.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" align="center">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

export default BoxServices;
