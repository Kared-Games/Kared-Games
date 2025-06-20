import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Page from "@kared/components/Page";

/**
 * Page de présentation de la politique de confidentialité de l'application Kared Fit
 */
function PagePrivacyPolicy() {
  const { VITE_EMAIL_CONTACT } = import.meta.env;
  const APP_NAME = "Kared Fit";

  // ----------------------------------------------------------------------

  return (
    <Page title="Privacy Policy">
      <Grid size={{ xs: 8 }} offset={{ xs: 2 }} sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {APP_NAME} - Privacy Policy
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          <strong>Last updated: April 19, 2025</strong>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          This Privacy Policy describes Our policies and procedures on the collection, use and
          disclosure of Your information when You use the Service and tells You about Your privacy
          rights and how the law protects You.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Legal Basis for Processing
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We process your personal data on the following legal bases:
        </Typography>
        <ul>
          <li>
            <strong>Consent</strong>: When you explicitly agree to the collection and processing of
            your data, particularly for personalized advertising.
          </li>
          <li>
            <strong>Performance of a Contract</strong>: To provide you with the application services
            in accordance with our terms of use.
          </li>
          <li>
            <strong>Legitimate Interest</strong>: To improve our application, ensure its security,
            and analyze its usage.
          </li>
          <li>
            <strong>Legal Obligation</strong>: When we are required by law to retain certain data.
          </li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Types of Data Collected
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          <strong>Personal Data</strong>
        </Typography>
        <ul>
          <li>Email address</li>
          <li>First and last name</li>
          <li>Account ID or username</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Usage Data
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Usage Data is collected automatically and may include device type, operating system,
          unique device identifiers (such as Advertising ID), IP address, browser type, visited
          pages, time spent on pages, and crash or bug reports.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Advertising ID
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We use the <strong>Advertising ID</strong> provided by the Android operating system to
          display ads via <strong>Google AdMob</strong>. This identifier may be used for ad
          personalization, measurement, fraud prevention and performance tracking. Users can reset
          or limit this ID from their device settings.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Third-party Services
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We use third-party services that may collect certain information:
        </Typography>
        <ul>
          <li>
            <strong>Google AdMob</strong>: for displaying ads and tracking performance.
            <a href="https://support.google.com/admob/answer/6128543" target="_blank">
              Google AdMob Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>LogRocket</strong>: for recording sessions and improving stability of the app
            (30-day data retention on free plan).
            <a href="https://logrocket.com/privacy" target="_blank">
              LogRocket Privacy Policy
            </a>
            .
          </li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          User Consent
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          When launching the app for the first time, users are shown a consent banner (via Google’s
          UMP SDK) allowing them to accept or reject personalized ad tracking and data collection
          related to advertising purposes. If the user opts out, only non-personalized ads will be
          shown.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Data Usage
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We use your data to:
        </Typography>
        <ul>
          <li>Provide and improve the app</li>
          <li>Manage user accounts</li>
          <li>Send updates and support communication</li>
          <li>Display ads and measure performance</li>
          <li>Analyze user behavior for bug fixing (LogRocket)</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Data Retention
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We retain personal data as long as necessary to provide the service. Specific retention
          periods include:
        </Typography>
        <ul>
          <li>
            <strong>Account information</strong>: Retained as long as your account is active.
            Deleted within 30 days after account deletion.
          </li>
          <li>
            <strong>Usage data</strong>: Retained for 90 days for trend analysis and application
            improvement.
          </li>
          <li>
            <strong>Session data (LogRocket)</strong>: Retained for 30 days (free plan), after which
            it is automatically deleted.
          </li>
          <li>
            <strong>Performance data</strong>: Retained in aggregated and anonymized form for up to
            12 months.
          </li>
        </ul>
        <Typography variant="body1" component="p" gutterBottom>
          You may request deletion of your data at any time.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Data Deletion
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {`You can delete your data via the app by navigating to Profile > Delete Account. This removes
        all personal data, including routines, challenges, friends, history, and statistics. You may
        also contact us to request deletion.`}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          International Data Transfers
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Your information, including personal data, may be transferred to and processed in
          countries other than the one in which you reside. In particular:
        </Typography>
        <ul>
          <li>
            Data collected by Google AdMob may be transferred to servers located in the United
            States and processed in accordance with the
            <a href="https://privacy.google.com/businesses/compliance" target="_blank">
              Privacy Shield Framework
            </a>
            .
          </li>
          <li>LogRocket stores and processes data in the United States.</li>
          <li>
            Our Firebase servers are primarily located in the United States and the European Union.
          </li>
        </ul>
        <Typography variant="body1" component="p" gutterBottom>
          By using our application, you consent to these transfers. We take all reasonably necessary
          measures to ensure that your data is treated securely and in accordance with this Privacy
          Policy.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Your Rights Under GDPR
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          If you are a resident of the European Union, you have the following rights regarding your
          personal data:
        </Typography>
        <ul>
          <li>
            <strong>Right of Access</strong>: You can request a copy of the personal data we hold
            about you.
          </li>
          <li>
            <strong>Right to Rectification</strong>: You can request correction of inaccurate or
            incomplete data.
          </li>
          <li>
            <strong>Right to Erasure</strong>: You can request the deletion of your personal data in
            certain circumstances.
          </li>
          <li>
            <strong>Right to Restriction of Processing</strong>: You can request the restriction of
            processing of your data.
          </li>
          <li>
            <strong>Right to Data Portability</strong>: You can request the transfer of your data to
            another service.
          </li>
          <li>
            <strong>Right to Object</strong>: You can object to the processing of your data for
            direct marketing purposes or based on legitimate interest.
          </li>
        </ul>
        <Typography variant="body1" component="p" gutterBottom>
          To exercise these rights, please contact us at the email address provided below. We will
          respond to your request within one month.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Security
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We implement standard security measures to protect your data. However, no method of
          transmission or storage is 100% secure.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Children's Privacy
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The app is not intended for users under 13 years old. We do not knowingly collect data
          from children.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Changes to This Policy
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We may update this policy from time to time. We recommend reviewing it periodically.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          Contact
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          If you have any questions about this Privacy Policy or wish to exercise your rights
          regarding your personal data, you can contact us at:
          <a href={`mailto:${VITE_EMAIL_CONTACT}`}>{VITE_EMAIL_CONTACT}</a>
        </Typography>
      </Grid>
    </Page>
  );
}

// ----------------------------------------------------------------------

export default PagePrivacyPolicy;
