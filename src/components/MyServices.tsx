import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaHive } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { My_services } from "../constants"

export default function MyServices() {
    return (
        <section className="section section-service" id="service">
            <div className="container">
                <h2 className="common-heading">My Services</h2>
                <p className="subtitle">These are the services I can offer you right now. </p>
            </div>

            <div className="container grid grid-three-column">
                <div className="service-box">
                    <div className="content">
                        <ion-icon name="desktop-outline" class="service-icon"></ion-icon>
                        <h3>Fronted Development</h3>
                        <p> I have Fronted skill HTML5, CSS3, JavaScript, BootStrap to build Fronted web page And now
                            learning Framework React JS</p>
                    </div>
                    <div className="cricle"></div>
                </div>

                <div className="service-box">
                    <div className="content">
                        <ion-icon name="code-slash" class="service-icon"></ion-icon>
                        <h3>Backend Development</h3>
                        <p>Not started yet can provide services of backend in future, Stay you soon I am learning now,
                            Technology with Node JS</p>
                    </div>
                    <div className="cricle"></div>
                </div>

                <div className="service-box">
                    <div className="content">
                        <ion-icon name="desktop-outline" class="service-icon"></ion-icon>
                        <h3>Responsive Web Desing</h3>
                        <p>Build a website fully Responsive with CSS3 Media Queries also bootstrap5 fronted framework</p>
                    </div>
                    <div className="cricle"></div>
                </div>
            </div>

        </section>

    )
}
