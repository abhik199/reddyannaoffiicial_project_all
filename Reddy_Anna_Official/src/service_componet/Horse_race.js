import React from "react";
import "../styles/servive styling/Cricket.css";
import HorseImg from "../image/s3.jpg";

const Horse_race = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      
      <div className="hero-section">

        <div className="cricket_container">
        <h1 className="Cricket_heading">Reddy Anna Horse Race Betting: Gallop into Thrilling Wins!</h1>
        <div className="hero-content">
            <p className="cricket_paragrapg">
            Welcome to the Reddy Anna Horse Race Betting Page, where the adrenaline of horse racing meets the excitement of betting. Whether you're a seasoned horse racing enthusiast or a newcomer looking for an exhilarating experience, Reddy Anna is your destination for a premium horse race betting adventure.            
            </p>

            <div className="hero-image">
            <img src={HorseImg} alt="Cricket Betting" />
            </div>          
        </div>        
      </div>
        <div className="contact-section">
          <button className="contact-btn">Contact us @7777857777</button>
          <button className="contact-btn">Contact us @7777857777</button>
        </div>

      {/* Features Section */}
      <div className="features-section">
        <h1 className="Cricket_heading">Key Features of Reddy Anna Horse Race Betting</h1>
        <ul>
          <li className="features_li"><strong>1.Reddy Anna Home Race ID:</strong> Secure your exclusive Reddy Anna Cricket ID to gain access to an extensive range of horse races, tracks, and betting markets. Your unique ID is your gateway to an immersive horse race betting experience.</li>
          <li className="features_li"><strong>2.Registration and Login:</strong>Signing up is a breeze. Register your account effortlessly to unlock the full spectrum of horse racing events. Log in seamlessly to explore races, odds, and place bets on your favorite horses. </li>
          <li className="features_li"><strong>3.Download the App:</strong> Take horse race betting on the go by downloading the Reddy Anna Betting App. Stay connected to live races, access real-time updates, and bet on your preferred horses anytime, anywhere.</li>
          <li className="features_li"><strong>4.Contact Us:</strong>Have questions or need assistance with horse race betting on Reddy Anna? Reach out to us through the provided contact number or WhatsApp. Our dedicated support team is ready to assist you in navigating the world of horse race betting.</li>
        </ul>
      </div>
      <div className="contact-section">
          <button className="contact-btn">Contact us @7777857777</button>
          <button className="contact-btn">Contact us @7777857777</button>
        </div>

      <div className="features-section">
      <h1 className="Cricket_heading">How to Get Started with Reddy Anna Horse Race Betting.</h1>
      <ul>
          <li className="features_li"><strong>1.Registration:</strong> Visit our website or download the app to register for your Reddy Anna Cricket ID. Complete the registration process by providing the necessary details.</li>
          <li className="features_li"><strong>2.Login:</strong> Once registered, log in to your account using your credentials. The login process is secure, granting you immediate access to our horse race betting platform.</li>
          <li className="features_li"><strong>3.Explore Horse Race Betting Options:</strong> Navigate to the horse race betting section to discover a wide array of races, tracks, and betting markets. From local races to prestigious championships, we cover it all.</li>
          <li className="features_li"><strong>4.Place Your Bets:</strong> Select your preferred race, explore various betting options, and place your bets confidently. Follow the races live and experience the thrill as your chosen horses sprint towards victory.</li>
          <li className="features_li"><strong>5.Contact Support:</strong> Should you have any queries or require assistance during your horse race betting journey, our customer support team is just a message or call away. We're committed to providing you with top-notch support for a seamless betting experience.</li>
        </ul>
      </div>

      <div className="wtsp_container">
      <div className="wtsp_content">
        <h1>Join Reddy Anna Now!</h1>
        <p className="wtsp_container_paragrapg">Join Reddy Anna Horse Race Betting today and immerse yourself in the world of racing excitement. With competitive odds, a user-friendly interface, and dedicated customer support, Reddy Anna is your trusted companion for horse race betting thrills. Bet smart, bet responsibly!</p>
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

export default Horse_race;
