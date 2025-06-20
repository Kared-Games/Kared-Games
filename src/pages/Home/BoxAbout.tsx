import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";

// ----------------------------------------------------------------------

type Person = {
  name: string;
  image: string;
  description: string;
  url: string;
};

/**
 * Contenu de présentation de l'équipe
 */
function BoxAbout() {
  const people: Person[] = [
    {
      name: "Alexandre Da Costa",
      image: "/assets/people/alexandre.webp",
      description: "Curieux et pragmatique,\ntoujours à l'affût de solutions innovantes.",
      url: "https://kared-dev.fr/alexandre",
    },
    {
      name: "Aurore Darcissac",
      image: "/assets/people/aurore.webp",
      description: "Vision claire et souci du détail\npour des applications qui ont du sens.",
      url: "https://www.linkedin.com/in/aurore-leblois", // "https://kared-dev.fr/aurore"
    },
  ];

  return (
    <Container sx={{ backgroundColor: "background.paper", py: 8 }}>
      <Stack direction="column" spacing={4} alignItems="center">
        <Typography variant="h4" component="h3" align="center" gutterBottom>
          Qui sommes-nous ?
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{ maxWidth: 600, mx: "auto", whiteSpace: "break-spaces", textAlign: "center" }}
        >
          {`Nous sommes deux développeurs passionnés, curieux et créatifs,\navec plus de 10 ans d'expérience dans le développement web et mobile.`}
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            maxWidth: 600,
            mx: "auto",
            whiteSpace: "break-spaces",
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          {`Ce qui nous anime ?\nDonner vie à des idées, concevoir des applications originales,\nperformantes et ludiques.\nToujours à l'écoute, toujours avec le sourire — et une bonne dose d'enthousiasme.`}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {people.map((person, idx) => (
            <Grid size={{ xs: 12, sm: 6 }} key={idx}>
              <Card
                component={motion.div}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "background.paper",
                }}
                whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <CardHeader
                  avatar={
                    <Avatar src={person.image} alt={person.name} sx={{ width: 100, height: 100 }} />
                  }
                  slotProps={{ avatar: { sx: { margin: "0" } } }}
                  sx={{ margin: "0 auto" }}
                />

                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom align="center">
                    {person.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ whiteSpace: "break-spaces" }}
                  >
                    {person.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ mt: "auto", justifyContent: "flex-end" }}>
                  <Button
                    size="small"
                    color="primary"
                    component={motion.a}
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ "&:hover": { color: "primary.main" } }}
                  >
                    En savoir plus
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

export default BoxAbout;
