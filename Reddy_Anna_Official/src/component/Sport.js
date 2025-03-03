import '../styles/Sport.css';

import home_img from "../image/img1.webp"



const Sport=()=>
{
    return(
        <>
        <div className='home_main_content'>
            <div className='welcome_content_container'>
                <div className="welcome-content">
                    <h1>Welcome to Reddy Anna Sports ID</h1>
                    <p>
                    At Reddy Anna Sports ID, we're passionate about all things sports. 
                    Whether you're a die-hard cricket fan, a fervent football enthusiast, 
                    or a tennis aficionado, we've got you covered with comprehensive 
                    coverage and insights into the world of sports. Let's dive into the 
                    exciting world of cricket, football, tennis, baseball, horse racing, 
                    kabaddi, and more:
                    </p>
                    <div className="contact-buttons">
                    <a href="tel:7777857777" className="button">WhatsApp Us @ 7797277777</a><br/>
                    <a href="https://wa.me/7797277777" className="button">WhatsApp Us @ 7797277777</a><br/>
                    <a href="https://wa.me/7777757777" className="button">WhatsApp Us @ 7777757777</a>
                    </div>
                </div>
                <div className="welcome-image">
                    <img src={home_img} alt="Players celebrating" />
                </div>
            </div>
      </div>
      <br/>
      <center>
        <div className="sport_container">
            <div className="sport_page_cart">
            <h2 className='sport_h2'>Cricket</h2>
            <p className='sport-p'>
                Cricket is more than just a sport; it's a way of life for millions of
                fans worldwide. From thrilling test matches to action-packed T20
                fixtures, cricket offers excitement, drama, and unforgettable moments.
                With Reddy Anna Sports ID, stay updated with live scores, match
                highlights, player stats, and expert analysis to fuel your cricketing
                passion.
            </p>
            <button>Contact us @7777857777</button>
        </div>

        <div className="sport_page_cart">
            <h2 className='sport_h2'>Football</h2>
            <p className='sport-p'>
            Football, the beautiful game, captivates hearts and minds around the
            globe. From the electric atmosphere of packed stadiums to the
            nail-biting drama of last-minute goals, football unites fans of all
            ages and backgrounds. With Reddy Anna Sports ID, dive into the world
            of football with match previews, player interviews, transfer rumors,
            and in-depth coverage of your favorite clubs and leagues.
            </p>
            <button>Contact us @7777857777</button>
        </div>

        <div className="sport_page_cart">
            <h2 className='sport_h2'>Tennis</h2>
            <p className='sport-p'>
                Tennis is a sport of grace, power, and precision, where every stroke can 
                change the course of a match. Whether it's the grandeur of Wimbledon or 
                the intensity of the US Open, tennis showcases athleticism and skill like 
                no other sport. At Reddy Anna Sports ID, follow the latest tennis news, tournament updates, player rankings, and expert insights to stay ahead of the game.
            </p>
            <button>Contact us @7777857777</button>
        </div>

        <div className="sport_page_cart">
            <h2 className='sport_h2'>Baseball</h2>
            <p className='sport-p'>
                Baseball, America's pastime, holds a special place in the hearts 
                of fans across the United States and beyond. With its rich history and 
                timeless traditions, baseball brings communities together and creates 
                lasting memories. Reddy Anna Sports ID celebrates the spirit of baseball with coverage of Major League Baseball (MLB), player profiles, game highlights, and analysis from the diamond.
            </p>
            <button>Contact us @7777857777</button>
        </div>

        <div className="sport_page_cart">
            <h2 className='sport_h2'>Horse Racing</h2>
            <p className='sport-p'>
                Horse racing combines speed, strategy, and elegance in a 
                thrilling display of athleticism. From prestigious events like 
                the Kentucky Derby to international races like the Dubai World 
                Cup, horse racing offers excitement and spectacle for fans 
                worldwide. Reddy Anna Sports ID delivers the latest horse racing news, race previews, betting tips, and insights into the world of equestrian sports.
            </p>
            <button>Contact us @7777857777</button>
        </div>

        <div className="sport_page_cart">
            <h2 className='sport_h2'>Kabaddi</h2>
            <p className='sport-p'>
            Kabaddi, a traditional Indian sport, has gained global recognition 
            for its fast-paced action and physicality. With its roots deeply 
            entrenched in Indian culture, kabaddi has evolved into a professional
            sport with international tournaments and leagues. Reddy Anna Sports ID celebrates the spirit of kabaddi with coverage of Pro Kabaddi League (PKL), player profiles, match highlights, and expert analysis.
            </p>
            <button>Contact us @7777857777</button>
        </div>
    </div>
    </center>
    
    <div className="sport_content_container">
      <h1>ReddyAnna Book Sports ID</h1>
      <p className='Sport_content_para'>
        At Reddy Anna Sports ID, we're committed to bringing you closer to the
        sports you love. Whether you're a casual fan or a dedicated enthusiast,
        join us on our journey to explore the world of sports and celebrate the
        athletes who inspire us all.
      </p>
      <button className="contact-button">WhatsApp Us @7777857777</button>
    </div>

        
        
        
        </>
    );
};
export default Sport