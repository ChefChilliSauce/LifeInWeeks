import React from "react";
import HeaderTOSP from "./HeaderTOSP";
import FooterTOSP from "./FooterTOSP";

function PrivacyPolicy() {
  return (
    <div>
      <HeaderTOSP />
      <section className="max-w-3xl mx-auto px-6 py-8 mb-8 select-none">
        <h1 className="text-2xl font-bold mb-2 tracking-tight text-gray-900 ">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 ">Effective Date: June 2025</p>
        <p className="text-lg text-gray-700 ">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use the Life in
          Weeks web application.
          <br />
          <b>1. Information We Collect</b>
          <br />
          Account Information: We collect the username and password you provide
          when signing up for the app.
          <br />
          Profile Data: When you enter your date of birth or add milestones,
          that information is stored to personalize your experience.
          <br /> Usage Data: We may collect anonymized data about how you use
          the site.
          <br />
          <b>2. How We Use Your Information</b>
          <br />
          To provide and personalize your experience in the app.
          <br />
          To allow you to log in securely.
          <br />
          To store your milestones and track your progress.
          <br />
          To improve the application and understand usage trends.
          <br />
          <b>3. How We Protect Your Data</b>
          <br />
          Your passwords are securely hashed using industry-standard practices.
          <br />
          We use encryption and security measures to protect your information.
          <br />
          We do not sell, rent, or share your personal data with third parties.
          <br />
          <b>4. Cookies & Sessions</b>
          <br />
          No tracking cookies or third-party advertising cookies are used.
          <br />
          <b>5. Data Sharing</b>
          <br />
          Your data is never shared with advertisers or third parties.
          <br />
          Your information may only be accessed by the developer for technical
          support or to maintain the app.
          <br />
          <b>6. Data Retention & Deletion</b>
          <br />
          Your account data is stored as long as you use the service.
          <br />
          You can request account deletion by contacting us at
          chefthechillisauce@gmail.com.
          <br />
          <b>7. Children's Privacy</b>
          <br />
          This app is not intended for children under 13. We do not knowingly
          collect data from children under 13.
          <br />
          <b>8. Changes to This Policy</b>
          <br />
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page, and your continued use constitutes acceptance.
          <br />
          <b>9. Contact</b>
          <br />
          If you have questions about this Privacy Policy or your data, please
          email us at chefthechillisauce@gmail.com.
          <br />
        </p>
      </section>
      <FooterTOSP />
    </div>
  );
}

export default PrivacyPolicy;
