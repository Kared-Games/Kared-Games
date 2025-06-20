import Page from "@kared/components/Page";
import BoxAbout from "./BoxAbout";
import BoxContact from "./BoxContact";
import BoxHero from "./BoxHero";
import BoxProjects from "./BoxProjects";
import BoxServices from "./BoxServices";

/**
 * Page de présentation
 */
function PageHome() {
  return (
    <Page title="Accueil">
      {/* Hero Section */}
      <BoxHero />

      {/* Services */}
      <BoxServices />

      {/* Projets */}
      <BoxProjects />

      {/* Qui sommes-nous ? */}
      <BoxAbout />

      {/* Call to action */}
      <BoxContact />
    </Page>
  );
}

// ----------------------------------------------------------------------

export default PageHome;
