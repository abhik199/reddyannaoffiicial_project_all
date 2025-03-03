import '../styles/Service.css';


import cricket from '../image/s1.webp';
import football from '../image/s2.jpeg';
import horse from '../image/s3.jpg';
import tennis from '../image/s4.jpeg';
import India_card from '../image/s5.jpg';
import casino from '../image/s6.png';
const Service=()=>
    {

        const services = [
            { name: 'Cricket Betting', image: cricket },
            { name: 'Football Betting', image: football },
            { name: 'Horse Race Betting', image: horse },
            { name: 'Tennis Betting', image: tennis },
            { name: 'Indian Card Games', image: India_card },
            { name: 'Casino', image: casino },
        ];

    return(
        <>
        <div className="services-container">
            <h1 className="services-title">Our Services</h1>
            <p className="services-description">
                At Reddy Anna Book Official, our commitment is to provide an unparalleled online gaming experience marked by excitement, security, and innovation. As a leading platform, we offer a diverse array of sports games, ranging from cricket and basketball to football and tennis, ensuring there's something for every sports enthusiast. Our live casinos provide a dynamic and immersive gaming environment, allowing users to test their luck in real-time. Security is paramount to us, and we employ advanced encryption technologies to safeguard user information. With a user-friendly interface, seamless navigation, and a dedication to responsible gaming practices, <span className="highlight">Reddy Anna</span> ensures that every player enjoys a thrilling yet responsible gaming journey. Join us and discover a world where entertainment meets excellence, and where your gaming satisfaction is our top priority.
            </p>
        </div>
        <div className="service_cart_container">
            <div className='service_cart_content'>
           <center> <h1>All Reddy Anna Services</h1></center>
            <div className="services">
                {services.map((service, index) => (
                <div className="service_card" key={index}>
                    <img src={service.image} alt={service.name} />
                    <div className="service-card-title">{service.name}</div>
                </div>
                ))}
            </div>
                <div className="contact-section">
                    <button className="contact-btn">Contact us @7777857777</button>
                    <button className="contact-btn">Contact us @7777857777</button>
                </div>
            </div>
        </div>
        </>
    );
};
export default Service;