import "../styles/Home.css";
import { Link } from "react-router-dom";

import home_img from "../image/img1.webp";
import match1 from "../image/k1.png";
import match2 from "../image/k2.png";
import match3 from "../image/k3.png";
import bet1 from "../image/ipl.webp";
import bet2 from "../image/bbl.webp";
import bet3 from "../image/cpl.webp";
import { useEffect, useState } from "react";
import axios from "axios";

const matches = [
  {
    title:
      "Durbar Rajshahi vs Sylhet Strikers, BPL, Reddy Anna Match Prediction",
    image: match1,
  },
  {
    title:
      "Sydney Sixers vs Sydney Thunder, BBL T20 - Reddy Anna Match Prediction",
    image: match2,
  },
  {
    title:
      "Australia vs England, AUS-W vs ENG-W, Today Match Prediction | Reddy Anna..",
    image: match3,
  },
];
const betting = [
  {
    title: "Introduction to the Indian Premier League - Reddy Anna .....",
    image: bet1,
    details: "IPL details here...",
  },
  {
    title: " Big Bash League: A Comprehensive Overview of Australia's T20",
    image: bet2,
    details: "BBL details here...",
  },
  {
    title: " Caribbean Premier League: A Deep Dive into the T20 Tournament.",
    image: bet3,
    details: "CPL details here...",
  },
];
const Home = () => {
  const [matches, setMatches] = useState([]);
  const [betting, setBetting] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/category/${process.env.REACT_APP_MATCH_ID}`
        );
        setMatches(response.data);
      } catch (err) {
        console.error("Error fetching match predictions:", err);
        setError("Error fetching match predictions");
      } finally {
        setLoading(false);
      }
    };

    const fetchBetting = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/category/${process.env.REACT_APP_BETTING_PREDICATION_ID}`
        );

        setBetting(response.data);
      } catch (err) {
        console.error("Error fetching betting information:", err);
        setError("Error fetching betting information");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
    fetchBetting();
  }, []);

  const cards = [
    { title: "Already Joined 40K+ users and enjoying.", icon: "👤" },
    { title: "Your Information is 100% Secured with us.", icon: "🔒" },
    { title: "24-hour withdrawal available (unlimited time)", icon: "⏰" },
    { title: "Exclusive Rewards and Bonuses Await.", icon: "🎁" },
    { title: "Cutting-edge gaming technology.", icon: "💻" },
  ];
  return (
    <>
      <section className="homepage">
        <div className="home_main_content">
          <div className="welcome_content_container">
            <div className="welcome-content">
              <h1>Welcome to Reddy Anna Book</h1>
              <h2>India's No.1 sports ID provider since 2010</h2>
              <p>
                Do you want to open your cricket ID online but can't find a
                trustworthy betting platform? Here's a Reddy Anna Book for you.
                This is India's most famous and trusted cricket demo ID
                platform. Reddy Anna Book is India's largest exchange platform,
                offering fantastic online sports betting with a 24-hour
                withdrawal service.
              </p>
              <div className="contact-buttons">
                <a href="tel:7777857777" className="button">
                  WhatsApp Us @ 7797277777
                </a>
                <br />
                <a href="https://wa.me/7797277777" className="button">
                  WhatsApp Us @ 7797277777
                </a>
                <br />
                <a href="https://wa.me/7777757777" className="button">
                  WhatsApp Us @ 7777757777
                </a>
              </div>
            </div>
            <div className="welcome-image">
              <img src={home_img} alt="Players celebrating" />
            </div>
          </div>
        </div>
        <div className="support_content">
          <center>
            <h1> Reddy Anna Book Support</h1>
          </center>
          <center>
            <p>
              Do you want to open your cricket ID online but can't find a
              trustworthy betting platform? Here's a Reddy Anna Book for you.
              This is India's most famous and trusted cricket demo ID platform.
              Reddy Anna Book is India's largest exchange platform, offering
              fantastic online sports betting with a 24-hour withdrawal service.
            </p>
          </center>

          <center>
            <div className="contact-buttons">
              <a href="tel:7777857777" className="button">
                Contact us @ 7777857777
              </a>
            </div>
          </center>

          <center>
            <h1> Reddy Anna Blog </h1>
          </center>
          <center>
            <p>
              Read our blog for betting tips, tricks and Reddy Anna Match
              Predictions here.
            </p>
          </center>
          <center>
            <div className="contact-buttons">
              <a href="tel:7777857777" className="button">
                Reddy Anna blog
              </a>
            </div>
          </center>

          <div className="match-cards">
            {matches.slice(0, 3).map((match, index) => (
              <div className="card" key={index}>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/blog/${match.blog_img}`}
                  alt={match.title}
                  className="card-image"
                />
                <div className="card-title">
                  {match.blog_title.substring(0, 60)}
                </div>
              </div>
            ))}
          </div>

          <center>
            <h1> Reddy Anna Betting 101 </h1>
          </center>
          <center>
            <p>
              Read our blog for betting tips, tricks and Reddy Anna Tips and
              Tricks here.
            </p>
          </center>
          <center>
            <div className="contact-buttons">
              <a href="tel:7777857777" className="button">
                Reddy Anna blog
              </a>
            </div>
          </center>
          <div className="match-cards">
            {betting.slice(0, 3).map((match, index) => (
              <div className="card" key={index}>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/blog/${match.blog_img}`}
                  alt={match.title}
                  className="card-image"
                />
                <div className="card-title">
                  {match.blog_title.substring(0, 60)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="success-container">
          <div className="success-content">
            <h1>Reddy Anna: Success Stories and Player Testimonials</h1>
            <p>
              In the realm of online gaming,{" "}
              <strong>Reddy Anna Book Official</strong> has emerged as a trusted
              platform, garnering positive reviews and tangible winning proof
              from its users. The platform's commitment to providing a secure
              and transparent gaming environment is reflected in the experiences
              shared by its player community.
            </p>
            <p>
              From diverse game offerings to responsible gaming features,{" "}
              <strong>Reddy Book</strong> has created a winning formula that
              resonates with players seeking a reputable online gaming
              destination.
            </p>
            <p>
              The tangible proof of winnings, combined with favorable reviews,
              solidifies <em>Reddy Anna</em>'s position as a reliable and
              rewarding platform in the competitive landscape of online gaming.
            </p>

            {/* Contact Section */}
            <div className="contact-section">
              <button className="contact-btn">Contact us @7777857777</button>
              <button className="contact-btn">Contact us @7777857777</button>
            </div>
          </div>
        </div>

        {/* New Client Feedback Section */}
        <div className="clients-feedback">
          <h2>Reddy Anna: Happy Clients Always Love Us</h2>
          <p>
            At Reddy Anna Book Official, our commitment to excellence is
            reflected in the satisfaction of our clients. With a focus on
            providing top-notch services and a seamless user experience, we take
            pride in the positive feedback and love from our happy clients.
          </p>
          <p>
            Their testimonials are a testament to our dedication to creating a
            platform that not only meets but exceeds their expectations. Join us
            at <em>Reddy Book</em> and experience the joy of online gaming with
            a community that truly loves the experience we provide.
          </p>

          <div className="feedback-stats">
            <div className="feedback-card">
              <h3>40,000 +</h3>
              <p>Happy Clients</p>
            </div>
            <div className="feedback-card">
              <h3>2 lakh +</h3>
              <p>Application Users</p>
            </div>
            <div className="feedback-card">
              <h3>4.7</h3>
              <p>Rating</p>
            </div>

            {/* Contact Section */}
          </div>
          <div className="contact-section">
            <button className="contact-btn">Contact us @7777857777</button>
            <button className="contact-btn">Contact us @7777857777</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h2>
            Reddy Anna Login - Seamless Access to Cricket, Sports, and Casino
            Betting
          </h2>
          <p>
            Reddy Anna Login provides seamless access to India's leading online
            betting platforms, including Laser 247 Login, Cricbet99 Login, and
            11xplay Login. Whether you're betting on cricket, football, or
            enjoying live casino games, Reddy Anna
          </p>
          <p>
            ensures a secure, fast, and user-friendly experience. With options
            like Reddy Anna Online Book Login, Reddy Anna Club Login, and the
            convenient Reddy Anna App Login, you can enjoy 24/7 access to
            exciting gaming and quick withdrawals. Join now and explore the
            unmatched thrill of betting with Reddy Anna Book Login!
          </p>
          <div className="contact-section">
            <button className="contact-btn">Reddy Anna Login</button>
          </div>
        </div>

        {/* ------------Reddy Anna for Unmatched Gaming Excitement?-------------- */}

        <div className=" Excitement_container">
          <div className="Excitement_content">
            <h1>Why Choose Reddy Anna for Unmatched Gaming Excitement?</h1>
            <p className="Excitement_description">
              At Reddy Anna Book Official, we stand out as your premier choice
              for online gaming. Offering a diverse range of games, cutting-edge
              technology, and a commitment to responsible gaming, we create an
              unmatched and thrilling experience for our users.
            </p>
            <div className="Excitement-card-container">
              {cards.map((card, index) => (
                <div className="Excitement-card" key={index}>
                  <div className="Excitement-icon">{card.icon}</div>
                  <p>{card.title}</p>
                </div>
              ))}
            </div>
            <div className="contact-section">
              <button className="contact-btn">Reddy Anna Login</button>
              <button className="contact-btn">Reddy Anna Login</button>
            </div>
          </div>
        </div>
        {/* ----------------- about section ---------------------------------- */}
        <div className="about-container">
          <h1 className="about-title">About Reddy Anna Book</h1>
          <p className="about-paragraph">
            Reddy Anna Book is a cricket betting and trading website that has
            been in operation since 2010. This service is regarded as the
            largest book exchange platform for cricket betting after Mahadev's
            book. It distinguishes itself from other exchange platforms due to
            its simple deposit and withdrawal options. Reddy Anna owns or
            operates this website. We communicate exclusively via WhatsApp.
          </p>
          <p className="about-paragraph">
            Reddy Anna cricket ID online has lately developed the most recent
            new methods of making money through betting. Users receive their
            cricket IDs promptly online, with 24-hour withdrawal services. With
            over 500000 pleased consumers, this platform is at the top of the
            book exchange market. It currently has over 200 offline branches.
          </p>
          <div className="contact-section">
            <button className="contact-btn">Reddy Anna Login</button>
          </div>
        </div>
        {/* ------------------- Cricket ID instantly with Reddy Anna ------------------------------------ */}
        <div className=" Cricket_ID_container">
          <div className=" Cricket_ID_content">
            <h1>How to obtain your Cricket ID instantly with Reddy Anna?</h1>
            <p className="Id_para">
              To begin betting, you must first obtain your Cricket ID by
              following these simple steps:
            </p>
            <ol>
              <li>
                Please contact us using the WhatsApp number provided on the
                website
                <a
                  href="https://www.reddyannaofficial.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.reddyannaofficial.in/
                </a>
                .
              </li>
              <li>
                You will be given a registration form in which you must provide
                all pertinent information such as your complete name, email
                address, current address, country, updated cellphone number,
                gender, and so on.
              </li>
              <li>
                Following that, you will receive an online Cricket ID. Choose
                and create a password.
              </li>
              <li>Here's how you can get your Reddy Anna ID.</li>
            </ol>
            <div className="contact-section">
              <button className="contact-btn">Reddy Anna Login</button>
            </div>
          </div>
        </div>

        <div className=" Cricket_ID_content">
          <h1>
            How to Add Funds to Your Reddy Anna Account for Betting Purposes?
          </h1>
          <p className="Id_para">
            Users who wish to place a wager must first deposit dollars on the
            registered ID.
          </p>
          <ol>
            <li>Log in to your ID, then click "Deposit."</li>
            <li>
              Now, choose a payment option to deposit funds. PhonePe, GPay, UPI
              payment, Net banking, and Paytm are all options for Indian
              customers to deposit funds.
            </li>
            <li>Fill out the necessary deposit information.</li>
            <li>Select Deposit.</li>
          </ol>
          <p className="Id_para">
            Remember that when you agree to the money deposit terms, you also
            agree to the site's costs.
          </p>

          <div className="contact-section">
            <button className="contact-btn">Reddy Anna Login</button>
          </div>
        </div>
        {/* ------------------- whatsapp details------------------------ */}
        <div className="wtsp_container">
          <div className="wtsp_content">
            <h1>Reddy Anna Book WhatsApp Number</h1>
            <p>Feel free to contact us.</p>
            <div className="contact-section">
              <button className="contact-btn">Contact us @7777857777</button>
            </div>
          </div>
        </div>
        {/* ------------------------ betting guide part--------------------------------------- */}

        <div className="betting-guide-container">
          <h1>How to place bet on Reddy Anna Book?</h1>
          <p>
            Placing Bets on <span className="highlight">Reddy Anna Book</span>:
            Bet on 1000+ Games and 150+ Live Casino Games Without Registration.
            The live games are conveniently showcased on the platform's
            dashboard. Simply choose a game, make your selection, and proceed to
            place your wager. For specific match-related bets, head to the Fancy
            Bet section after selecting the match, and confidently place your
            wager on the team of your choice.
          </p>
          <div className="contact-section">
            <button className="contact-btn">Contact us @7777857777</button>
          </div>
        </div>

        <div className="betting-guide-container">
          <h1>
            At Reddy Anna Choose Between Multiple Sports Games and Live Casinos
            to Bet on
          </h1>
          <p>
            The Reddy Anna Cricket ID platform boasts an extensive collection of
            sports games, covering cricket, basketball, football, tennis,
            soccer, and more. You have the flexibility to place bets on any
            sports game or live match of your choice. Beyond sports, the
            platform also features live casinos, providing an opportunity to
            test your luck and potentially win big.
          </p>
          <div className="contact-section">
            <button className="contact-btn">Contact us @7777857777</button>
          </div>
        </div>

        <div className="betting-guide-container">
          <h1>How to Get in Touch with Reddy Anna Book?</h1>
          <p>
            The contact information is available on the webpage. You can also
            reach us through any of the WhatsApp numbers provided below.
          </p>
          <div className="contact-section">
            <button className="contact-btn">Contact us @7777857777</button>
          </div>
        </div>

        <div className="betting-guide-container">
          <h1>How to Withdraw Cash From Reddy Anna?</h1>
          <p>
            Withdrawal is simple, and you can deposit the winnings into your
            bank account by sending a legitimate withdrawal request to the
            registered numbers. Remember that the withdrawal notification will
            only be published on one website. First and foremost, you must
            cancel all outstanding stakes and agree to withdraw the refund. On
            withdrawal requests, we may impose a fee.
          </p>
          <br />
          <p>
            Reddy Anna Book is a reputed betting platform. All you have to do is
            register for your cricket ID online and follow the instructions.
            Gambling and betting, on the other hand, are addictions, therefore
            play honestly to avoid addiction. Invest your money wisely and try
            your luck to make the most money. You have 24-hour deposit and
            withdrawal options, so you can gamble whenever you want.
          </p>
          <br />
          <p>
            We will double-check the details before proceeding with the
            withdrawal request to confirm that everything is proper. The money
            will be shown in the bank account number that you provided.
          </p>
          <div className="contact-section">
            <button className="contact-btn">Contact us @7777857777</button>
          </div>
        </div>
        {/* ------------------- FAQ content -------------------------------------------- */}
        <div class="faq-container">
          <h1>FAQ</h1>
          <h2>1. Who is Reddy Anna Book Official?</h2>
          <p className="FAQ_para">
            Reddy Anna Book Official is an online gaming platform that offers a
            diverse range of sports games, live casinos, and betting options.
            Our goal is to provide users with an exciting and secure environment
            for online entertainment.
          </p>

          <h2>2. How do I register on Reddy Anna?</h2>
          <p className="FAQ_para">
            To register on Reddy Anna, click on the <strong>WhatsApp Us</strong>{" "}
            button on our homepage. Chat with our team to create your account by
            providing the required information. Once registered, you can start
            exploring and enjoying our games.
          </p>

          <h2>3. Is it safe to play on Reddy Anna?</h2>
          <p className="FAQ_para">
            Yes, Reddy Anna prioritizes the security and privacy of our users.
            We implement advanced encryption technologies and security measures
            to ensure a safe gaming environment. Our platform also promotes
            responsible gaming practices.
          </p>

          <h2>4. What games can I play on Reddy Anna?</h2>
          <p className="FAQ_para">
            Reddy Anna offers a vast selection of platforms like{" "}
            <a href="#">LASER247</a>, <a href="#">PLAY99EXCH</a>,{" "}
            <a href="#">PLAY247</a>, <a href="#">11XPLAY</a>,{" "}
            <a href="#">CRICBET99</a>, <a href="#">SKYEXCH</a>,{" "}
            <a href="#">TIGER EXCHANGE</a> and more. On these platforms, you can
            play sports games, including cricket, basketball, football, tennis,
            soccer, and more.
          </p>
          <p className="FAQ_para">
            Additionally, we provide a variety of live casino games like
            Roulette, Blackjack, Teen Patti, Poker, and more for those seeking a
            real-time gaming experience.
          </p>

          <h2>5. How do I place bets on Reddy Anna?</h2>
          <p className="FAQ_para">
            Placing bets on Reddy Anna is easy. Navigate to the game or live
            match of your choice, select your wager, and follow the on-screen
            prompts. For specific match-related bets, you can explore the Fancy
            Bet section after selecting the match.
          </p>

          <h2>6.How can I deposit funds into my Reddy Anna account?</h2>
          <p className="FAQ_para">
            To deposit funds, log in to your account, chat with customer care,
            choose your preferred payment method and do the transfer. Instantly
            you will get the coins in your account. At Reddy Book you can
            transfer money using UPI, Bank Transfer, RTGS and NEFT.
          </p>

          <h2>7. What measures are in place for responsible gaming?</h2>
          <p className="FAQ_para">
            Anna Reddy is committed to promoting responsible gaming. We provide
            tools for setting limits, self-exclusion options, and resources to
            help users make informed decisions about their gaming activities.
          </p>

          <h2>8. How can I contact customer support??</h2>
          <p className="FAQ_para">
            If you have any questions, concerns, or require assistance, you can
            reach reddy anna book whatsapp number or reddy anna customer care
            number +91 7777947913.
          </p>

          <h2>9. Are there age restrictions for using Reddy Anna?</h2>
          <p className="FAQ_para">
            Yes, users must be of 18+ age in their jurisdiction to use Reddy
            Anna. By using our platform, you confirm that you meet the legal age
            requirements.
          </p>

          <h2>9. Are there age restrictions for using Reddy Anna?</h2>
          <p className="FAQ_para">
            Yes, users must be of 18+ age in their jurisdiction to use Reddy
            Anna. By using our platform, you confirm that you meet the legal age
            requirements.
          </p>

          <h2>10. How often are the games updated on Reddy Anna?</h2>
          <p className="FAQ_para">
            We regularly update our games to offer a fresh and engaging
            experience for our users. Stay tuned for new releases and exciting
            additions to our gaming catalog.
          </p>

          <h2>11. Can I play on Reddy Anna without registering an account?</h2>
          <p className="FAQ_para">
            While you can explore our platform without registering, you'll need
            to create an account to place bets, participate in live games, and
            access certain features. Registration is a quick and straightforward
            process.
          </p>

          <h2>
            12. Are my personal and financial details secure on Reddy Anna?
          </h2>
          <p className="FAQ_para">
            Absolutely. At Reddy Anna we prioritize the security of your
            personal and financial information. Our platform uses advanced
            encryption technology and follows stringent security measures to
            safeguard your data.
          </p>

          <h2>13. Can I change my account details after registration?</h2>
          <p className="FAQ_para">
            Yes, you can update certain account details after registration. Chat
            to reddy anna book whatsapp number. However, for security reasons,
            some details may require additional verification.
          </p>

          <h2>14. Are there any fees for depositing or withdrawing funds?</h2>
          <p className="FAQ_para">
            Reddy Anna does not charge fees for depositing or withdrawing funds.
            However, please be aware that your payment provider may impose
            transaction fees. We recommend checking with your provider for any
            applicable charges. Within 15 min Your withdrawal process is
            finished.
          </p>

          <h2>
            15. What are the withdrawal channels available with Reddy Anna?
          </h2>
          <p className="FAQ_para">
            We accept Indian Rupee(INR) only for transactions on Reddy Anna. In
            future The available currencies will be displayed during the deposit
            process. Choose your preferred currency, and transactions will be
            processed accordingly.
          </p>

          <h2>
            16. How do I initiate a withdrawal from my Reddy Anna account?
          </h2>
          <p className="FAQ_para">
            To withdraw funds, log in to your account, Chat with reddy anna
            withdrawal number +91 7777947913. Follow the instructions to
            complete the withdrawal process securely. Within 15 min Your
            withdrawal process will be done.
          </p>

          <h2>
            17. Are there any restrictions on the countries that can access
            Reddy Anna?
          </h2>
          <p className="FAQ_para">
            Reddy Anna is designed for users in regions where online gaming is
            legally permitted. However, users are responsible for ensuring they
            comply with local laws and regulations related to online gambling.
          </p>

          <h2>
            18. How can I stay updated on promotions and special offers on Reddy
            Anna?
          </h2>
          <p className="FAQ_para">
            Keep an eye on our promotions page for the latest offers and
            bonuses. Additionally, subscribing to our newsletter and following
            us on social media platforms will ensure you stay informed about
            exclusive promotions. Follow Reddyanna on Social Media.
          </p>

          <h2>19. What happens if I forget my password?</h2>
          <p className="FAQ_para">
            If you forget your password, Chat to reddy anna book whatsapp
            number. Team will help.
          </p>

          <h2>20. Can I close my Reddy Anna account if needed?</h2>
          <p className="FAQ_para">
            Yes, you have the option to close your Reddy Anna account. Contact
            our reddy anna book whatsapp number, and they will guide you through
            the account closure process.
          </p>
        </div>
      </section>
    </>
  );
};
export default Home;
