import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Page from "@kared/components/Page";

/**
 * Page de présentation de la suppression de compte de l'application Kared Fit
 */
function PageSecurityPolicy() {
  const { VITE_EMAIL_CONTACT } = import.meta.env;
  const COMPANY_NAME = "Kared Dev";

  // ----------------------------------------------------------------------

  return (
    <Page title="Security Policy">
      <Grid size={{ xs: 8 }} offset={{ xs: 2 }} sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {COMPANY_NAME} - Security Policy
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          <strong>Last updated: June 20, 2025</strong>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          At {COMPANY_NAME}, the security of our users and their data is a top priority. We
          encourage responsible disclosure of any security vulnerabilities found in our application
          or infrastructure.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Reporting a Vulnerability
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          If you believe you have discovered a security vulnerability, please report it to us as
          soon as possible by sending an email to&nbsp;
          <a href={`mailto:${VITE_EMAIL_CONTACT}`}>{VITE_EMAIL_CONTACT}</a>.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Please provide as much detail as possible, including steps to reproduce the issue,
          potential impact, and any relevant screenshots or logs.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Our Commitment
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We are committed to investigating all reports and will respond as quickly as possible. We
          may contact you for further information if necessary.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We ask that you do not publicly disclose the vulnerability until we have had a reasonable
          opportunity to address it.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Scope
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          This policy applies to all digital services and applications operated by {COMPANY_NAME}.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Contact
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          For any questions regarding this policy, please contact us at&nbsp;
          <a href={`mailto:${VITE_EMAIL_CONTACT}`}>{VITE_EMAIL_CONTACT}</a>.
        </Typography>
      </Grid>
    </Page>
  );
}

// ----------------------------------------------------------------------

export default PageSecurityPolicy;
