import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Page from "@kared/components/Page";

/**
 * Page de présentation des conditions d'utilisation de l'application Kared Fit
 */
function PageTermsAndConditions() {
  const { VITE_EMAIL_CONTACT } = import.meta.env;
  const APP_NAME = "Kared Fit";

  // ----------------------------------------------------------------------

  return (
    <Page title="Terms and Conditions">
      <Grid size={{ xs: 8 }} offset={{ xs: 2 }} sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {APP_NAME} - Terms and Conditions
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          <strong>Last updated: April 19, 2025</strong>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Welcome to {APP_NAME}! By using our mobile application (hereinafter referred to as "the
          Application"), you agree to the following terms and conditions (hereinafter referred to as
          "the Terms"). Please read them carefully before proceeding.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          By accessing or using the Application, you agree to comply with these Terms. If you do not
          agree to these Terms, please do not use the Application.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          2. Changes to Terms
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We reserve the right to modify these Terms at any time. Changes will be posted on this
          page and will take effect as soon as they are published. We encourage you to review this
          page periodically to stay informed of any changes.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          3. Application Usage
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          3.1 Eligibility and Minors
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You must be at least 10 years old to use the Application. Users between 10 and 16 years
          old must have parental or guardian consent and supervision when using the Application. By
          using the Application, you represent that you are of the required age and, if applicable,
          have obtained the necessary parental consent to use our services.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          3.1.1 Special Provisions for Minors
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          If you are under 16 years old:
        </Typography>
        <ul>
          <li>
            You must obtain permission from your parent or legal guardian before using the
            Application
          </li>
          <li>Your parent or guardian must review and agree to these Terms on your behalf</li>
          <li>
            Your parent or guardian is responsible for supervising your use of the Application
          </li>
          <li>
            Your parent or guardian must monitor your activities, including any social interactions
            within the Application
          </li>
          <li>
            We recommend that parents or guardians discuss appropriate exercise limits with their
            children
          </li>
          <li>
            Parents or guardians have the right to request access to personal data collected from
            their child and to request its deletion
          </li>
        </ul>
        <Typography variant="body1" component="p" gutterBottom>
          We encourage parents and guardians to teach their children about safe online practices and
          to monitor their online activities. If we learn that a child under 10 is using our
          Application, we will terminate the account and delete any associated personal data.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          3.2 User Account
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          To access certain features, you will need to create an account. You are responsible for
          maintaining the confidentiality of your account information and for all activities that
          occur under your account. You must notify us immediately of any unauthorized use of your
          account.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          3.3 Authorized Usage
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You agree to use the Application only for lawful purposes and in accordance with these
          Terms. You must not use the Application in any way that violates local or international
          laws or regulations.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          4. Intellectual Property
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          4.1 Copyright
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The Application, including all content, graphics, logos, and other elements, is protected
          by copyright and is owned by {APP_NAME} or its licensors. You may not reproduce,
          distribute, or modify any part of the Application without our prior written permission.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          4.2 Trademarks
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The trademarks and logos of {APP_NAME} may not be used without our prior written consent.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          5. Privacy
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We take the privacy of your data very seriously. Our{" "}
          <a href="/fit/privacy-policy">Privacy Policy</a> explains how we collect, use, and protect
          your personal information. By using the Application, you agree to the practices described
          in our Privacy Policy.
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          5.1 Compliance with GDPR
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          For users in the European Union, we comply with the General Data Protection Regulation
          (GDPR). Under the GDPR, you have the following rights:
        </Typography>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to rectification of inaccurate personal data</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restriction of processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Rights related to automated decision making and profiling</li>
        </ul>
        <Typography variant="body1" component="p" gutterBottom>
          To exercise these rights or for any questions regarding our data processing practices,
          please contact our Data Protection Officer at
          <a href={`mailto:${VITE_EMAIL_CONTACT}`}>{VITE_EMAIL_CONTACT}</a>. We will respond to your
          request within one month. If you are not satisfied with our response, you have the right
          to lodge a complaint with the relevant supervisory authority (CNIL in France).
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          5.2 Data Retention
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We will retain your personal data only for as long as necessary to fulfill the purposes
          for which it was collected, including for the purposes of satisfying any legal,
          accounting, or reporting requirements. To determine the appropriate retention period, we
          consider the amount, nature, and sensitivity of the personal data, the potential risk of
          harm from unauthorized use or disclosure, and applicable legal requirements.
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          5.3 Data Transfers
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Your data may be transferred to and processed in countries outside the European Economic
          Area (EEA). When we do so, we ensure appropriate safeguards are in place to protect your
          data and to comply with our legal obligations under the GDPR.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          6. User-Generated Content
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          6.1 Responsibility
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You are solely responsible for any content you submit or share through the Application.
          You agree not to post content that is illegal, defamatory, obscene, or otherwise
          inappropriate.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          6.2 License
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          By posting content through the Application, you grant us a worldwide, non-exclusive,
          royalty-free, and transferable license to use, reproduce, modify, and distribute such
          content in connection with the Application.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          6.3 Photo Usage and Responsibility
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Photos uploaded for use within the Application are the sole responsibility of the user.
          Photos related to personalized exercises will be visible if the exercise is included in a
          challenge. Group photos will also be visible to members of the group. Any photos that do
          not adhere to community standards or legal regulations are the responsibility of the user.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          7. Liability Limitation
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The Application is provided "as is" and we make no guarantees that the Application will be
          uninterrupted or error-free. We will not be liable for any indirect, consequential, or
          punitive damages resulting from the use or inability to use the Application.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          7.1 Security and Health Disclaimer
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          While the Application may provide fitness and health-related information, it is not
          intended as medical advice. Always consult with a healthcare professional before starting
          any new exercise program or making changes to your current health regimen. We are not
          responsible for any injuries or health issues that may occur as a result of using the
          Application.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          8. Termination
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          We reserve the right to suspend or terminate your access to the Application at any time,
          without notice, if we believe that you have violated these Terms.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          8.1 Account Deletion
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You have the right to delete your account at any time. When you delete your account, all
          your personal data will be permanently removed from our systems, including your profile
          information, routines, challenges, groups, custom exercises, friends list, training
          history, achievements, and user statistics.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          For detailed instructions on how to delete your account and information about our data
          retention policy after deletion, please refer to our
          <a href="delete-account.html">Account Deletion</a> page.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Please note that some anonymized data may be retained for analytical purposes, and certain
          information may be kept as required by law. Navigation sessions recorded via our error
          tracking tool (LogRocket) are stored for a maximum period of 30 days before being
          automatically deleted, even after account deletion.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          9. Applicable Law
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          These Terms are governed by the laws of France. Any disputes arising from the use of the
          Application will be subject to the exclusive jurisdiction of the courts in France.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          10. Code of Conduct
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          When using the social features of the application, including group challenges and photo
          sharing, you agree to:
        </Typography>
        <ul>
          <li>Respect other users and not post offensive, harassing or inappropriate content</li>
          <li>Not impersonate other people</li>
          <li>Not share content that violates copyright or other intellectual property rights</li>
          <li>Not use the application to send unsolicited messages or spam</li>
        </ul>
        <Typography variant="body1" component="p" gutterBottom>
          Any violation of this code of conduct may result in the suspension or termination of your
          account.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          11. Advertising
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The Application is currently free to use and is supported by advertising. By using the
          Application, you agree to the display of advertisements.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          11.1 Third-Party Advertisements
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Advertisements may be served by third-party advertising companies. These companies may use
          information about your visits to this and other applications to provide advertisements
          about goods and services of interest to you. If you would like more information about this
          practice and to know your choices about not having this information used by these
          companies, please see our <a href="/fit/privacy-policy">Privacy Policy</a>.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          11.2 Advertisement Content
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          While we strive to work with reputable advertisers, we are not responsible for the content
          of advertisements displayed in the Application. The presence of an advertisement does not
          imply our endorsement of the advertised product or service.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          12. Third-Party Services
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The Application may contain links to third-party websites or services. We are not
          responsible for the content or privacy practices of these third parties.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 6 }}>
          13. Contact
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          If you have any questions regarding these Terms, please contact us at:
          <a href={`mailto:${VITE_EMAIL_CONTACT}`}>{VITE_EMAIL_CONTACT}</a>.
        </Typography>
      </Grid>
    </Page>
  );
}

// ----------------------------------------------------------------------

export default PageTermsAndConditions;
