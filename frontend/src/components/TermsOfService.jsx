import React from "react";
import { Link } from "react-router-dom";
import HeaderTOSP from "./HeaderTOSP";
import FooterTOSP from "./FooterTOSP";

function TermsOfService() {
  return (
    <div>
      <div>
        <HeaderTOSP />
      </div>
      <div>
        <section className="max-w-3xl mx-auto px-6 py-8 mb-8 select-none">
          <h1 className="text-2xl font-bold mb-2 tracking-tight text-gray-900 ">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-700 ">Effective Date: June 2025</p>
          <p className="text-lg text-gray-700 ">
            Welcome to Life in Weeks! By accessing or using our website and
            services, you agree to be bound by these Terms of Service ("Terms").
            If you do not agree with any part of these Terms, please do not use
            our website. <br />
            <b>1. Use of the Service</b>
            <br />
            Eligibility: You must be at least 13 years old to use this website.
            <br />
            Personal Use: Life in Weeks is provided for your personal,
            non-commercial use only.
            <br /> Account Responsibility: If you create an account, you are
            responsible for maintaining the confidentiality of your credentials.
            <br />
            <b>2. User Content</b>
            <br />
            You are responsible for the content (such as milestones or personal
            data) you add to your account.
            <br />
            Do not upload offensive, illegal, or infringing content.
            <br />
            We do not claim ownership of your content, but you grant us the
            right to use it to provide the service.
            <br />
            <b>3. Privacy</b>
            <br />
            We respect your privacy. Please review our{" "}
            <Link to="/privacy">
              {" "}
              <a
                className="text-[#4ade80] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
            </Link>
            to understand how we collect, use, and safeguard your information.
            <br />
            We do not sell your data or use it for advertising.
            <br />
            <b>4. Prohibited Activities</b>
            <br />
            Do not attempt to hack, overload, or disrupt the service.
            <br />
            Do not use the service for unlawful or abusive purposes.
            <br />
            <b>5. Disclaimer</b>
            <br />
            Life in Weeks is provided "as is" and "as available." We make no
            warranties as to the accuracy or availability of the service.
            <br />
            We are not responsible for any loss or damage resulting from your
            use of the site.
            <br />
            <b>6. Modifications</b>
            <br />
            We may update these Terms from time to time. We will notify users of
            significant changes by updating the effective date at the top of
            this page.
            <br />
            Your continued use of the service after changes constitutes
            acceptance of the new Terms.
            <br />
            <b>7. Termination</b>
            <br />
            We reserve the right to suspend or terminate your access if you
            violate these Terms.
            <br />
            <b>8. Contact</b>
            <br />
            If you have questions about these Terms, contact us at
            chefthechillisauce@gmail.com.
            <br />
          </p>
        </section>
      </div>
      <div>
        <FooterTOSP />
      </div>
    </div>
  );
}

export default TermsOfService;
