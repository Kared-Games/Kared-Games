import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Android from "@mui/icons-material/Android";
import Apple from "@mui/icons-material/Apple";
import { PATH_PAGE } from "@kared/routes/paths";

// ----------------------------------------------------------------------

type Project = {
  title: string;
  description: string;
  image: string;
  url?: string;
  androidUrl?: string;
  iosUrl?: string;
};

/**
 * Contenu des projets réalisés
 */
function BoxProjects() {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      title: "Kared Fit",
      description: "Application mobile de fitness en temps réel",
      image: "/assets/projects/logo-kared-fit.webp",
      url: PATH_PAGE.fit,
      androidUrl: "https://play.google.com/store/apps/details?id=com.kared.karedfit",
      iosUrl: "https://apps.apple.com/fr/app/kared-fit/id6739947899?platform=iphone",
    },
    {
      title: "Solutions Terrains",
      description: "Application mobile pour la recherche de terrains",
      image: "/assets/projects/logo-solutions-terrains.webp",
      androidUrl: "https://play.google.com/store/apps/details?id=com.solutionsterrains.app",
      iosUrl: "https://apps.apple.com/us/app/solutions-terrains/id6742559497?platform=iphone",
    },
    {
      title: "Mia Pilot",
      description: "Application de gestion de stock assisté par IA",
      image: "/assets/projects/logo-mia-pilot.webp",
    },
  ];

  return (
    <Container sx={{ backgroundColor: "background.paper", py: 8, mb: 10 }}>
      <Stack direction="column" spacing={4} alignItems="center">
        <Typography variant="h4" component="h3" align="center" gutterBottom>
          Nos réalisations
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{ mb: 4, maxWidth: 600, mx: "auto", textAlign: "center" }}
        >
          Voici un aperçu de nos dernières réalisations. Applications mobiles, outils métier ou
          solutions innovantes : chaque projet est un défi relevé avec passion.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projects.map((project, idx) => (
            <Grid size={{ xs: 12, sm: 4 }} key={idx}>
              <Card
                component={motion.div}
                sx={{
                  height: "100%",
                  backgroundColor: "background.paper",
                  display: "flex",
                  flexDirection: "column",
                }}
                whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <CardMedia
                  component="img"
                  height={175}
                  image={project.image}
                  alt={project.title}
                  onClick={() => project.url && navigate(project.url)}
                  sx={{ objectFit: "contain", maxWidth: 124, mx: "auto" }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h4" gutterBottom align="center">
                    {project.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" align="center">
                    {project.description}
                  </Typography>
                </CardContent>

                {(project.androidUrl || project.iosUrl) && (
                  <CardActions sx={{ mt: "auto", justifyContent: "flex-end" }}>
                    {project.androidUrl && (
                      <IconButton
                        size="small"
                        color="primary"
                        href={project.androidUrl}
                        aria-label={`${project.title} Android`}
                        target="_blank"
                      >
                        <Android />
                      </IconButton>
                    )}

                    {project.iosUrl && (
                      <IconButton
                        size="small"
                        color="primary"
                        href={project.iosUrl}
                        aria-label={`${project.title} iOS`}
                        target="_blank"
                      >
                        <Apple />
                      </IconButton>
                    )}
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

export default BoxProjects;
