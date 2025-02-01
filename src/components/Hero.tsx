import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.jpg";
import heropic from "../assets/hero2.jpg"
import "../App.css"
export default function Hero() {
    return (
        <section className="section section-hero" id="home">
            <div className="container grid grid-two-column">
                <div className="section-hero-data item1" data-aos="fade-down">
                    <h2>Hello👋🏻 i am,</h2>
                    <h1><span>Lateef</span> Ahmad</h1>
                    <h2>I am,</h2>
                    <h2 className="profile">A MERN Stack Developer</h2>
                    <div>
                        <a href="#contact" className="btn hire-me">Say hello</a>
                    </div>
                </div>

                <div className="hero-image item2" data-aos="fade-down-left">
                    <img src={heropic} className="hero-img" alt="my photo" />

                    {/* <div className="achivements" data-aos="fade-left">
                        <div className="grid grid-three-column achivements-box">
                            <div className="box">
                                <h2>Projects</h2>
                                <p>10+</p>
                            </div>
                            <div className="box">
                                <h2>Internships</h2>
                                <p>1</p>
                            </div>
                            <div className="box">
                                <h2>Certifications</h2>
                                <p>5+</p>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="social-icons item3" data-aos="fade-right">

                    <a href="https://www.linkedin.com/in/ajaychaudhari0101/" target="_blank"><ion-icon
                        name="logo-linkedin"></ion-icon></a>

                    <a href="https://github.com/Ajay-Chaudhari01001" target="_blank"><ion-icon
                        name="logo-github"></ion-icon></a>

                    <a href="https://www.instagram.com/ajay_chaudhari_19" target="_blank"><ion-icon
                        name="logo-instagram"></ion-icon></a>

                    <a href="https://wa.me/7499866920" target="_blank" class="icons">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>

                </div>

            </div>

        </section>
    )
}
