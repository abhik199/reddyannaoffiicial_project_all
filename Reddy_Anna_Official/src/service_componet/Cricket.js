import React from "react";
import "../styles/servive styling/Cricket.css";
import heroImage from "../image/s1.webp";

const Cricket = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      
      <div className="hero-section">
        <div className="cricket_container">
        <h1 className="Cricket_heading">Reddy Anna Cricket Betting: Your Gateway to Thrilling Cricket Action!</h1>
        <div className="hero-content">
          <p className="cricket_paragrapg">
            Welcome to the Reddy Anna Cricket Betting Page, your premier destination for an exhilarating
            cricket betting experience. Whether you're a passionate cricket fan or someone looking to add
            an extra layer of excitement to the game, Reddy Anna Cricket Betting has you covered.
          </p>
          <div className="hero-image">
          <img src={heroImage} alt="Cricket Betting" />
        </div>
        </div>       
      </div>
      <div className="contact-section">
          <button className="contact-btn">Contact us @7777857777</button>
          <button className="contact-btn">Contact us @7777857777</button>
        </div>

      {/* Features Section */}
      <div className="features-section">
        <h1 className="Cricket_heading">Key Features of Reddy Anna Cricket Betting</h1>
        <ul>
          <li className="features_li"><strong>1.Reddy Anna Cricket ID:</strong> Obtain your unique Reddy Anna Cricket ID to access a world of cricket betting opportunities. Your ID is your passport to the exciting realm of cricket action on our platform.</li>
          <li className="features_li"><strong>2.Registration and Login:</strong> Signing up is quick and easy. Register your account to unlock the full range of cricket betting options. Log in seamlessly to access your account and start placing bets on your favorite teams and players.</li>
          <li className="features_li"><strong>3.Download the App:</strong> Enjoy the convenience of cricket betting on the go by downloading the Reddy Anna Cricket Betting App. Stay connected to the latest matches, odds, and live updates right at your fingertips.</li>
          <li className="features_li"><strong>4.Contact Us:</strong> Have questions or need assistance? Reach out to us through the provided contact number or WhatsApp. Our dedicated support team is ready to assist you with any queries related to cricket betting on Reddy Anna.</li>
        </ul>
      </div>
      <div className="contact-section">
          <button className="contact-btn">Contact us @7777857777</button>
          <button className="contact-btn">Contact us @7777857777</button>
        </div>

      <div className="features-section">
      <h1 className="Cricket_heading">How to Get Started with Reddy Anna Cricket Betting.</h1>
      <ul>
          <li className="features_li"><strong>1.Registration:</strong> Visit our website or download the app to register for your Reddy Anna Cricket ID. Fill in the required details to create your account.</li>
          <li className="features_li"><strong>2.Login:</strong> Once registered, log in to your account using your credentials. The login process is secure and straightforward.</li>
          <li className="features_li"><strong>3.Explore Cricket Betting Options:</strong> Navigate to the cricket betting section to explore a wide range of matches, tournaments, and betting markets. From popular leagues to international fixtures, we cover it all.</li>
          <li className="features_li"><strong>4.Place Your Bets:</strong> Select your preferred match, choose from various betting options, and place your bets confidently. Follow the live updates and enjoy the thrill of watching your predictions unfold.</li>
          <li className="features_li"><strong>5.Contact Support:</strong> Should you have any questions or require assistance at any point, our customer support team is just a message or call away. We are committed to ensuring a seamless and enjoyable cricket betting experience for our users.</li>

        </ul>
      </div>

      <div className="wtsp_container">
        <div className="wtsp_content">
            <h1>Join Reddy Anna Now!</h1>
            <p className="wtsp_container_paragrapg">Join Reddy Anna Cricket Betting today and elevate your 
              cricket-watching experience to new heights. With competitive odds, a user-friendly 
              interface, and dedicated customer support, <strong>Reddy Anna</strong> is your trusted partner for 
              cricket betting excitement. Bet smart, bet responsibly!
            </p>
          <div className="contact-section">
            <button className="contact-btn">Contact us @7777857777</button>
            <button className="contact-btn">Contact us @7777857777</button>
          </div>
        </div>
      </div>
      </div>
      
    </div>

    
    </>
  );
};

export default Cricket;
