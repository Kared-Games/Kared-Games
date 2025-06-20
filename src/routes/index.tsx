import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loadable from "@kared/components/Loadable";
import FitLayout from "@kared/pages/KaredFit/FitLayout";

// ----------------------------------------------------------------------

const PageHome = Loadable(lazy(() => import("@kared/pages/Home/PageHome")));
const PageSecurityPolicy = Loadable(lazy(() => import("@kared/pages/Politics/PageSecurityPolicy")));
const PageKaredFit = Loadable(lazy(() => import("@kared/pages/KaredFit/PageKaredFit")));
const PageTermsAndConditions = Loadable(
  lazy(() => import("@kared/pages/KaredFit/PageTermsAndConditions"))
);
const PagePrivacyPolicy = Loadable(lazy(() => import("@kared/pages/KaredFit/PagePrivacyPolicy")));
const PageDeleteAccount = Loadable(lazy(() => import("@kared/pages/KaredFit/PageDeleteAccount")));

/**
 * Router component.
 */
const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<PageHome />} />
        <Route path="/security-policy" element={<PageSecurityPolicy />} />

        <Route path="/fit" element={<FitLayout />}>
          <Route index element={<PageKaredFit />} />
          <Route path="terms-and-conditions" element={<PageTermsAndConditions />} />
          <Route path="/fit/privacy-policy" element={<PagePrivacyPolicy />} />
          <Route path="/fit/delete-account" element={<PageDeleteAccount />} />
        </Route>
      </Route>
    </Routes>
  );
};

// ----------------------------------------------------------------------

export default Router;
