import React from 'react';
import '../styles/Disclaimer.css';

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <h1 className='Disclaimer_title'>Disclaimer - Reddy Anna</h1>
      <p className="last-updated">Last Updated: 31/01/2024</p>
      <p className="disclaimer-intro">
        Welcome to the Reddy Anna Book Official Disclaimer Page. By accessing and using our platform, you
        acknowledge and agree to the terms outlined in this disclaimer. Please read this document carefully
        to understand the limitations and responsibilities associated with the use of our services.
      </p>
      <ol>
        <li className="disclaimer-intro">
          <strong>Information Accuracy:</strong> While we strive to ensure the accuracy of information
          presented on Reddy Anna, we do not guarantee the completeness, accuracy, or reliability of any
          content. Users are encouraged to verify information independently.
        </li>
        <li className="disclaimer-intro">
          <strong>Gambling Risks:</strong> Participation in online gambling involves inherent risks. Reddy Anna Book Official provides entertainment services, and users are solely responsible for the risks associated with betting and gaming activities. We do not accept liability for any financial losses or consequences arising from gambling.
        </li>
        <li className="disclaimer-intro">
          <strong>Platform Availability:</strong> We make reasonable efforts to maintain the availability and functionality of Reddy Anna. However, we do not guarantee uninterrupted access, and we reserve the right to temporarily or permanently suspend services without prior notice.
        </li>
        <li className="disclaimer-intro">
          <strong>Third-Party Content:</strong> Reddy Anna may contain links to third-party websites or content. We do not endorse or take responsibility for the content, accuracy, or security of external sites. Users accessing third-party links do so at their own risk.
        </li>
        <li className="disclaimer-intro">
          <strong>Security Measures:</strong> We employ security measures to protect user information. However, the internet is not entirely secure, and we cannot guarantee the absolute security of data transmitted through our platform. Users are encouraged to take necessary precautions.
        </li>
        <li className="disclaimer-intro">
          <strong>Changes to Disclaimer:</strong>Reddy Anna Book Official may update this disclaimer periodically. Users are responsible for reviewing the disclaimer regularly. Continued use of our platform after changes implies acceptance of the updated disclaimer.
        </li>
        <li className="disclaimer-intro">
          <strong> Legal Compliance:</strong> Users are responsible for complying with all local laws and regulations related to online gambling. Reddy Anna Book Official does not warrant that its services comply with the laws of all jurisdictions.
        </li>
        <li className="disclaimer-intro">
          <strong> Contact Information:</strong> If you have any questions or concerns about this disclaimer, please contact us at +91 7777947913.
        </li>
      </ol>

       <p className="disclaimer-intro">
        By using Reddy Anna Book Official, you acknowledge and agree to the terms outlined in this disclaimer. We appreciate your understanding and cooperation.
       </p>
      <p className="disclaimer-intro">
        Thank you for choosing Reddy Anna Book Official. We are dedicated to providing a secure and enjoyable gaming experience for our users.      
      </p>

      <div className="button-container">
        <button className="custom-button">Open Demo Account</button>
        <button className="custom-button">Contact Us Now</button>
    </div>
    </div>
  );
};

export default Disclaimer;
