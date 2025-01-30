import AboutGif from "../assets/github.gif"
export default function About() {
    return (
        <section className="section section-about" id="about">
            <h2 className="container common-heading">About Me</h2>
            <div className="container grid grid-two-column">
                <div className="about-image">
                    <img src={AboutGif} alt="my about image" />
                </div>
                <div className="bio-data">
                    <p className="top-line">Hi, my name is <strong>Lateef Ahmad Baba</strong>, and I am a passionate Full Stack
                        Developer.</p>

                    <p>I am from <strong>Srinagar , Jammu and Kashmir</strong>, and I completed
                        <strong>Bachelor of Computer Science And Engineering</strong> from Islamic University of Science And Technology.
                    </p>

                    <p>Currently, I work as a <strong>Frontend Developer</strong> with hands-on experience in building
                        interactive and responsive web applications using <strong>HTML5, CSS3, JavaScript (ES6+), React.js,
                            and Node.js</strong>. I am continuously upskilling myself to master the <strong>MERN Stack
                                (MongoDB, Express.js, React.js, and Node.js)</strong> to become a proficient Full Stack
                        Developer.</p>

                    <p>I am highly interested in <strong>problem-solving</strong> and love building products that can have a
                        real impact on people's lives. I enjoy coding daily, learning new technologies, and improving my
                        skills in both frontend and backend development.</p>

                    <p>My goal is to grow my career in the IT sector by contributing to innovative projects, collaborating
                        with talented teams, and continuously improving my knowledge. I am passionate about creating
                        products that can be used by millions of people, solving real-world problems, and enhancing user
                        experiences.</p>

                    <p>I am currently exploring advanced frameworks and tools to build scalable web applications and
                        progressing toward becoming a well-rounded <strong>Full Stack Developer</strong>.</p>

                    <a href="images/Ajay-Chaudhari-Resume.pdf" className="btn">Download CV</a>
                </div>
            </div>
        </section>
    )
}
