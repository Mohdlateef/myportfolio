import heropic from "../assets/hero2.jpg"
import "../App.css"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

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
                </div>
                <div className="social-icons item3" data-aos="fade-right">

                    <a href="https://www.linkedin.com/in/lateef-ahmad-954a36254/" target="_blank"><FaLinkedin /></a>

                    <a href="https://github.com/Mohdlateef" target="_blank"> <FaGithub /></a>

                    <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>

                    <a href="https://wa.me/7780870323" target="_blank" className="icons"> <FaWhatsapp /></a>

                </div>

            </div>

        </section>
    )
}
