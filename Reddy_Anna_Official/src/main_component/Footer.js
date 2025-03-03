
import '../styles/Footer.css';
import instagram from '../image/instra.png';
import pinterest from '../image/pintrest.png';
import telegram from '../image/telegram.png';
import wtsp from '../image/wtsp.png';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="link-column">
          <a href="/about-us">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/sports-id">Sports ID</a>
        </div>
        <div className="link-column">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>
        <div className="link-column">
          <a href="/blog">Blog</a>
        </div>
      </div>
      <div className="social-media">
        <p>Follow us on social media</p>
        <div className="social-icons">
          <a href="https://telegram.org" target="_blank" rel="noreferrer">
            <img src={telegram} alt="Telegram" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">
            <img src={pinterest} alt="Pinterest" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
            <img src={wtsp} alt="WhatsApp" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2024 <a href="https://reddyannabook.com">Reddy Anna Book Official</a>. All rights reserved. Unauthorized reproduction or distribution of any content on this website is prohibited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

