import { FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { RiMailLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="section footer ">

            <div className="container grid grid-three-column">
                <div className="about">
                    <h3>About</h3>
                    <p>This is my personal portfolio website where I showcase my education details, as well as my knowledge
                        and work experience. It serves as a resume website to showcase my skills and achievements.</p>
                </div>

                <div className="links">
                    <h3>Quick Links</h3>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#technologies">Technologies</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>

                <div className="connect">
                    <h3>Have Question?</h3>
                    <div>
                        <span>
                            <FaMapMarkerAlt />
                        </span><a href="#"> Srinagar Jammu AND Kashmir </a>
                    </div>

                    <div>
                        <span>
                            <MdAddCall />
                        </span><a href="tel:+917499866920"> +91 7780870323</a>

                    </div>

                    <div>
                        <span>
                            <RiMailLine />
                        </span><a href="mailto:Lateefahbaba123@gmail.com">Lateefahbaba123@gmail.com</a>
                    </div>

                </div>

                <address className="social-icons">

                    <a href="https://www.linkedin.com/in/lateef-ahmad-954a36254/" target="_blank" className="text-white"><FaLinkedin /></a>

                    <a href="https://github.com/Mohdlateef" target="_blank" className="icons"> <FaGithub /></a>

                    <a href="https://www.instagram.com/" target="_blank" className="icons"><FaInstagram /></a>

                    <a href="https://wa.me/7780870323" target="_blank" className="icons"> <FaWhatsapp /></a>

                </address>
            </div>

            <div className="copyright">
                <p>Developed by Lateef Ahmad Baba | All rights reserved</p>
            </div>
        </footer>
    )
}
