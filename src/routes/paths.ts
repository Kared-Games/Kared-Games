/**
 * Helper function to construct paths
 * @param {string} root - The root path
 * @param {string} pathname - The pathname to append to the root
 * @returns {string} - The combined path
 */
const path = (root: string, pathname: string): string => {
  return `${root}${pathname}`.replace(/\/\//g, "/");
};

// ----------------------------------------------------------------------

const ROOT = "/";

// ----------------------------------------------------------------------

export const PATH_PAGE = {
  root: ROOT,
  home: path(ROOT, "/home"),
  fit: path(ROOT, "/fit"),
  fitTermsAndConditions: path(ROOT, "/fit/terms-and-conditions"),
  fitPrivacyPolicy: path(ROOT, "/fit/privacy-policy"),
  fitDeleteAccount: path(ROOT, "/fit/delete-account"),
  securityPolicy: path(ROOT, "/security-policy"),
};
