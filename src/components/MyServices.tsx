
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
                        <p> Experienced in building responsive and modern web interfaces using HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, and React.js.</p>
                    </div>
                    <div className="cricle"></div>
                </div>

                <div className="service-box">
                    <div className="content">
                        <ion-icon name="code-slash" class="service-icon"></ion-icon>
                        <h3>Backend Development</h3>
                        <p>Backend Development
                            I have experience with backend technologies including Node.js, Express, MongoDB, Mongoose, SQL, and SQLite.
                        </p>
                    </div>
                    <div className="cricle"></div>
                </div>

                <div className="service-box">
                    <div className="content">
                        <ion-icon name="desktop-outline" class="service-icon"></ion-icon>
                        <h3>Responsive Web Desing</h3>
                        <p>Skilled in building responsive and user-friendly web interfaces using CSS3, Bootstrap 5, and Tailwind CSS. I ensure seamless experiences across all screen sizes.

                        </p>
                    </div>
                    <div className="cricle"></div>
                </div>
            </div>

        </section>

    )
}
