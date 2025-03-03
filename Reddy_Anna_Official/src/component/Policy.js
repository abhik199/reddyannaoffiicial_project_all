


import React from "react";
import '../styles/Policy.css'; // Import CSS file

const Policy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last Updated: 31/01/2024</p>
      <p className="privacy-intro">
        Welcome to Reddy Anna Book Official's Privacy Policy. Your privacy and
        the security of your information are of utmost importance to us. This
        Privacy Policy outlines the types of personal information we collect,
        how it is used, and the measures we take to protect your data.
      </p>
      
      <h2 className="privacy-section">1. Information We Collect:</h2>
      <ul className="privacy-list">
        <li>
          <strong>Personal Information:</strong> When you register an account, we may
          collect personal details such as your name, email address, contact number,
          and date of birth.
        </li>
        <li>
          <strong>Financial Information:</strong> To facilitate transactions, we may collect
          payment information, including credit card details or other payment methods.
        </li>
        <li>
          <strong>Usage Information:</strong> We collect information about your interactions
          with our platform, including the games you play, bets placed, and your navigation
          through the website.
        </li>
      </ul>

      <h2 className="privacy-section">2. How We Use Your Information:</h2>
      <ul className="privacy-list">
        <li><strong>Account Management:</strong> To manage your account, provide customer support, and verify your identity.</li>
        <li><strong>Transaction Processing:</strong> To process your bets, deposits, and withdrawals.</li>
        <li><strong>Improving User Experience:</strong> To enhance our services, personalize your experience, and analyze user preferences.</li>
        <li><strong>Communications:</strong> To send you updates, promotional offers, and important notifications related to your account.</li>
      </ul>

      <h2 className="privacy-section">3. Data Security:</h2>
      <p className="privacy-text">
        We implement security measures to protect your information from unauthorized access, disclosure, alteration, and destruction.
        Our secure encryption protocols and regular security audits help ensure the integrity of your data.
      </p>

      <h2 className="privacy-section">4. Third-Party Disclosures:</h2>
      <p className="privacy-text">
        We may share your information with trusted third parties for specific purposes, such as payment processing and marketing communications.
        However, we do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent.
      </p>

      <h2 className="privacy-section">5. Cookies and Tracking:</h2>
      <p className="privacy-text">
        We use cookies and similar tracking technologies to enhance your browsing experience and collect information about your activities on our platform.
        You can manage your cookie preferences through your browser settings.
      </p>

      <h2 className="privacy-section">6. Your Privacy Choices:</h2>
      <p className="privacy-text">
        You have the right to access, correct, or delete your personal information. You can also manage your communication preferences by opting in or out of certain communications.
      </p>

      <h2 className="privacy-section">7. Changes to the Privacy Policy:</h2>
      <p className="privacy-text">
        This Privacy Policy is subject to change. We will notify you of any material changes, and the updated policy will be effective upon posting.
      </p>

      <h2 className="privacy-section">Contact Information:</h2>
      <p className="privacy-text">
        By using Reddy Anna Book Official, you signify your acceptance of this Privacy Policy. If you have any questions or concerns, please contact us at <strong>+91 7777947913</strong>.
      </p>
      <p className="privacy-text">
        Thank you for choosing Reddy Anna Book Official. Your privacy and trust are fundamental to our commitment to providing a secure and enjoyable gaming experience.
      </p>

      <div className="button-container">
      <button className="custom-button">Open Demo Account</button>
      <button className="custom-button">Contact Us Now</button>
     </div>

    </div>
  );
};

export default Policy;
