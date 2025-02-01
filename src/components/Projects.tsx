import youtube from "../assets/projects/youtube.png"
export default function Projects() {
    return (
        <section className="section section-portfolio" id="projects">
            <div className="container">
                <h2 className="common-heading">My Projects</h2>
                <p className="subtitle">This is my portfolio section where I showcase some awesome projects that I built using
                    HTML5, CSS3, JavaScript and API.
                </p>
            </div>

            <div className="container grid grid-three-column">
                <div className="project-box">
                    <img src={youtube} alt="hero image" />
                    <div className="overlay">
                        <h3>YouTube</h3>
                        <p>This repository contains 30 web projects built using HTML5, CSS3, and JavaScript. It is designed
                            to help students learn about JavaScript and web development by providing real-world project
                            examples</p>
                        <div className="portfolio-links">
                            {/* <a href="https://github.com/Ajay-Chaudhari01001/30_Days-JS-Projects" target="_blank"><ion-icon
                                    name="logo-github"></ion-icon></a> */}
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    {/* <img src="images/portfolio/financely.png" alt="hero image"> */}
                    <div className="overlay">
                        <h3>Financely</h3>
                        <p>The React Financial Tracker App is designed to help users keep track of their income and
                            expenses. Users can add, edit, delete transactions, and view their financial data in the form of
                            charts.</p>
                        <div className="portfolio-links">
                            {/* <a href="https://financetracker22.netlify.app/" target="_blank"><ion-icon
                                    name="desktop-outline"></ion-icon></a> */}
                            {/* <a href="https://github.com/Ajay-Chaudhari01001/Financely" target="_blank"><ion-icon
                                    name="logo-github"></ion-icon></a> */}
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    {/* <img src="images/portfolio/ghumoindia-min.png" alt="hero image"> */}
                    <div className="overlay">
                        <h3>Ghumo India</h3>
                        <p>This is a frontend project that features an attractive user interface designed to represent
                            various places in India.</p>
                        <div className="portfolio-links">
                            {/* <a href="https://ghumoindia.netlify.app" target="_blank"><ion-icon
                                    name="desktop-outline"></ion-icon></a> */}
                            {/* <a href="https://github.com/Ajay-Chaudhari01001/Travel-Agency-Ghumo-INDIA"
                                    target="_blank"><ion-icon name="logo-github"></ion-icon></a> */}
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    {/* <img src="images/portfolio/university-min.png" alt="hero image"> */}
                    <div className="overlay">
                        <h3>Hello World University</h3>
                        <p>This is a university website that showcases its courses and facilities. It was built using modern
                            web technologies such as HTML5, CSS3, and JavaScript.</p>
                        <div className="portfolio-links">
                            {/* <a href="https://helloworlduniversity.netlify.app" target="_blank"><ion-icon
                                    name="desktop-outline"></ion-icon></a> */}
                            {/* <a href="https://github.com/Ajay-Chaudhari01001/helloworlduniversity" target="_blank"><ion-icon
                                    name="logo-github"></ion-icon></a> */}
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    {/* <img src="images/portfolio/portfolio-min.png" alt="hero image"> */}
                    <div className="overlay">
                        <h3>My Portfolio</h3>
                        <p>This is my personal portfolio website that was built using HTML, CSS, and JavaScript. It features
                            an attractive and modern design.
                        </p>
                        <div className="portfolio-links">
                            {/* <a href="https://ajaychaudhari.me" target="_blank"><ion-icon
                                name="desktop-outline"></ion-icon></a>
                            <a href="https://github.com/Ajay-Chaudhari01001/My-Portfolio-" target="_blank"><ion-icon
                                name="logo-github"></ion-icon></a> */}
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    {/* <img src="images/portfolio/gp3-min.png" alt="hero image"> */}
                    <div className="overlay">
                        <h3>Github Profile Searcher</h3>
                        <p>This app helps students easily find user profiles on GitHub.</p>
                        <div className="portfolio-links">
                            {/* <a href="https://githubprofilefinde.netlify.app/" target="_blank"><ion-icon
                                name="desktop-outline" tar></ion-icon></a>
                            <a href="https://github.com/Ajay-Chaudhari01001/30_Days-JS-Projects/tree/master/9%20-%20Github%20Profile%20Searcher"
                                target="_blank"><ion-icon name="logo-github"></ion-icon></a> */}
                        </div>
                    </div>
                </div>

            </div>

        </section>



    )
}
