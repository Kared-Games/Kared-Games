import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Page from "@kared/components/Page";

/**
 * Page de présentation de la suppression de compte de l'application Kared Fit
 */
function PageDeleteAccount() {
  const { VITE_EMAIL_CONTACT } = import.meta.env;
  const APP_NAME = "Kared Fit";

  // ----------------------------------------------------------------------

  return (
    <Page title="Account Deletion">
      <Grid size={{ xs: 8 }} offset={{ xs: 2 }} sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {APP_NAME} - Account Deletion
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          <strong>Last updated: April 19, 2025</strong>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          This page describes the procedure to delete your account from the {APP_NAME} app.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Steps to delete your account
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          To permanently delete your account from the {APP_NAME} app:
        </Typography>
        <ul>
          <li>Log in to the app</li>
          <li>Tap the menu icon in the top right corner</li>
          <li>Select "Profile"</li>
          <li>At the bottom of the page, tap the "Delete my account" button</li>
          <li>A confirmation window (modal) will open</li>
          <li>Tap "Confirm" to validate the deletion</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Deleted Data
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The following data will be permanently deleted:
        </Typography>
        <ul>
          <li>Profile data</li>
          <li>Routines</li>
          <li>Challenges</li>
          <li>Groups</li>
          <li>Custom exercises</li>
          <li>Friends list and presence in friends lists</li>
          <li>Training history</li>
          <li>Unlocked achievements</li>
          <li>User statistics</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Data Retention
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          No data will be retained after account deletion. However, the application uses an error
          tracking and performance tool called <strong>LogRocket</strong>. Navigation sessions and
          user behavior recorded via LogRocket are stored for a maximum period of
          <strong>30 days</strong> before being automatically deleted. No profile data or personal
          identity information (such as name, email, etc.) is retained after account deletion.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Contact
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          For any questions, you can contact us at the following address:
          <a href={`mailto:${VITE_EMAIL_CONTACT}`}>{VITE_EMAIL_CONTACT}</a>.
        </Typography>
      </Grid>
    </Page>
  );
}

// ----------------------------------------------------------------------

export default PageDeleteAccount;
