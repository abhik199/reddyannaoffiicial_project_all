import React from "react";
import "../styles/servive styling/Cricket.css";
import FootballImage from "../image/s2.jpeg";

const Football = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      
      <div className="hero-section">

        <div className="cricket_container">
        <h1 className="Cricket_heading">Reddy Anna Football Betting: Score Big with Every Bet!</h1>
        <div className="hero-content">
            <p className="cricket_paragrapg">
                Welcome to the Reddy Anna Football Betting Page, where the thrill of the game meets the excitement of betting. Whether you're a die-hard football fan or simply looking to add extra excitement to the matches, Reddy Anna is your go-to destination for a premium football betting experience.
            </p>

            <div className="hero-image">
            <img src={FootballImage} alt="Cricket Betting" />
            </div>          
        </div>        
      </div>
        <div className="contact-section">
          <button className="contact-btn">Contact us @7777857777</button>
          <button className="contact-btn">Contact us @7777857777</button>
        </div>

      {/* Features Section */}
      <div className="features-section">
        <h1 className="Cricket_heading">Key Features of Reddy Anna Football Betting</h1>
        <ul>
          <li className="features_li"><strong>1.Reddy Anna Football ID:</strong> Obtain your exclusive Reddy Anna Cricket ID to unlock a world of football betting possibilities. Your unique ID is the key to accessing a diverse range of football leagues, tournaments, and betting markets.</li>
          <li className="features_li"><strong>2.Registration and Login:</strong> Sign up effortlessly to become part of the Reddy Anna football betting community. Log in with ease to explore a myriad of football matches and betting options.</li>
          <li className="features_li"><strong>3.Download the App:</strong> Experience the convenience of football betting on the Reddy Anna platform by downloading our user-friendly app. Stay connected, receive live updates, and bet on your favorite teams anytime, anywhere.</li>
          <li className="features_li"><strong>4.Contact Us:</strong> Need assistance or have questions about football betting on Reddy Anna? Reach out to us through the provided contact number or WhatsApp. Our dedicated support team is here to ensure you have a seamless betting experience.</li>
        </ul>
      </div>
      <div className="contact-section">
          <button className="contact-btn">Contact us @7777857777</button>
          <button className="contact-btn">Contact us @7777857777</button>
        </div>

      <div className="features-section">
      <h1 className="Cricket_heading">How to Get Started with Reddy Anna Cricket Betting.</h1>
      <ul>
          <li className="features_li"><strong>1.Registration:</strong> Visit our website or download the app to register for your Reddy Anna Cricket ID. Complete the registration process by providing the necessary details.</li>
          <li className="features_li"><strong>2.Login:</strong> Once registered, log in to your account using your credentials. The login process is secure, granting you immediate access to our football betting platform.</li>
          <li className="features_li"><strong>3.Explore Football Betting Options:</strong>  Navigate to the football betting section to discover a wide array of matches, leagues, and betting markets. From local leagues to international championships, we've got it covered.</li>
          <li className="features_li"><strong>4.Place Your Bets:</strong> Choose your preferred match, explore various betting options, and place your bets with confidence. Watch the matches unfold and experience the excitement as your predictions come to life.</li>
          <li className="features_li"><strong>5.Contact Support:</strong> Should you have any queries or require assistance during your football betting journey, our customer support team is just a message or call away. We're committed to providing you with the best support for a seamless betting experience.</li>

        </ul>
      </div>

      <div className="wtsp_container">
      <div className="wtsp_content">
        <h1>Join Reddy Anna Now!</h1>
        <p className="wtsp_container_paragrapg">Join Reddy Anna Football Betting today and elevate your football-watching experience. With competitive odds, a user-friendly interface, and dedicated customer support, Reddy Anna is your trusted companion for football betting excitement. Bet smart, bet responsibly!</p>
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

export default Football;
