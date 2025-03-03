import "../styles/servive styling/ReddyAnnaLogin.css";

import login_img from "../image/login.avif";



const LoginCard = ({ title, description, points, buttonText }) => {
    return (
      <div className="login_card">
        <h2 className="login_title">{title}</h2>
        <p className="login_paragraph">{description}</p>
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <button className="login_btn">{buttonText}</button>
      </div>
    );
  };
  

const ReddyAnnaLogin=()=>{
    return(
        <>
        <div className='home_main_content'>
        <div className='welcome_content_container'>
        <div className="welcome-content">
        <h1>Reddy Anna Login – Your Trusted Gateway to Online Betting and Gaming</h1>
        <p>
            Welcome to the Reddy Anna Login page, the official access point for India’s premier cricket betting and gaming platform. Whether you're using Laser 247 Reddy Anna Login, Cricbet99 Reddy Anna Login, or Reddy Anna App Login, we ensure a seamless, secure, and fast login experience. With thousands of users logging in daily, Reddy Anna is the ultimate destination for safe, exciting, and reliable betting.
        </p>
        <div className="contact-buttons">
          <a href="tel:7777857777" className="button">Reddy Anna Login</a><br/>
          
        </div>
      </div>
      <div className="welcome-image">
        <img src={login_img} alt="Players celebrating" />
      </div>
      </div>
      </div>

      <div className="login_container">
      <LoginCard
        title="Reddy Anna Login"
        description="The main hub for all your betting and gaming needs. Whether you’re a beginner or an experienced bettor, this is your gateway to explore:"
        points={[
          'Cricket betting markets.',
          'Live casino games.',
          'Various sports options.',
        ]}
        buttonText="Reddy Anna Login"
      />
      <LoginCard
        title="Laser 247 Reddy Anna Login"
        description="A dedicated login designed for optimized gaming speed and reliability."
        points={[
          'Ideal for quick bets during live matches.',
          'High-performance interface for a smooth experience.',
        ]}
        buttonText="Laser 247 Reddy Anna Login"
      />
      <LoginCard
        title="Cricbet99 Reddy Anna Login"
        description="Perfect for cricket enthusiasts, this login portal offers tailored cricket betting opportunities:"
        points={[
          'Extensive cricket match betting markets.',
          'Exclusive odds for major tournaments and leagues.',
        ]}
        buttonText="Cricbet99 Reddy Anna Login"
      />
      <LoginCard
        title="11xplay Reddy Anna Login"
        description="A unique platform that introduces interactive and innovative betting opportunities:"
        points={[
          'Exclusive access to 11xplay features.',
          'Perfect for gamers seeking something different.',
        ]}
        buttonText="11xplay Reddy Anna Login"
      />
      <LoginCard
        title="Reddy Anna Club Login"
        description="An exclusive login portal for members of the Reddy Anna Club:"
        points={[
          'Premium betting options.',
          'Exclusive perks for club members.',
        ]}
        buttonText=" Reddy Anna Club Login"
      />
    </div>

    <div className="features-card">
      <h1 className="login_heading">Key Features of Reddy Anna Login</h1>
      <p className="login_ftr_paragraph">Reddy Anna Login portals are designed to provide a hassle-free and enjoyable experience. Here’s what makes them stand out:</p>
      <ul>
        <li><strong>Secure Login:</strong> Advanced encryption ensures your data and transactions are safe.</li>
        <li><strong>Multiple Platforms:</strong> Tailored portals like Cricket99 and Laser 247 cater to specific needs.</li>
        <li><strong>Fast Access:</strong> Quick logins and seamless navigation for uninterrupted betting.</li>
        <li><strong>24/7 Availability:</strong> Login and bet anytime, day or night.</li>
        <li><strong>Mobile Compatibility:</strong> Enjoy betting on the go with the Reddy Anna App Login.</li>
      </ul>
      <button className="whatsapp-button">WhatsApp Us @7777857777</button>
    </div>

    <div className="features-card">
      <h1 className="login_heading">Troubleshooting Login Issues</h1>
      <p className="login_ftr_paragraph">Having trouble accessing your account? Here’s how to resolve common issues:</p>
      <ul>
        <li><strong>1.Forgot Password:</strong> <br/> Use the "Forgot Password" option to reset your login credentials.</li>
        <li><strong>2.Incorrect Credentials:</strong><br/> Double-check your username and password to ensure accuracy.</li>
        <li><strong>3.Account Locked:</strong><br/> Contact customer support if your account is locked due to multiple failed login attempts.</li>
        <li><strong>4.Technical Issues:</strong><br/> Ensure you’re using the latest version of the app or browser for a smoother experience.</li>
      </ul>
      <br/>
      <p className="login_ftr_paragraph">For further assistance, connect with our 24x7 Customer Support at:<br/>
      📞 +91 7777857777</p>

      <button className="whatsapp-button">WhatsApp Us @7777857777</button>
    </div>

        </>
    );
};
export default ReddyAnnaLogin