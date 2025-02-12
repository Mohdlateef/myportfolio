import AboutGif from "../assets/github.gif"
import Resume from "../assets/lateefahmadbaba (1) (2).pdf"
export default function About() {
    return (
        <section className="section section-about" id="about">
            <h2 className="container common-heading">About Me</h2>
            <div className="container grid grid-two-column">
                <div className="about-image">
                    <img src={AboutGif} alt="my about image" />
                </div>
                <div className="bio-data">
                    <p className="top-line">Hi <strong> I'm Lateef Ahmad Baba,</strong>a MERN Stack Developer from Srinagar, Jammu & Kashmir.</p>
                    <p>I from <strong>Srinagar , Jammu and Kashmir</strong>,I hold a
                        <strong> Bachelor’s degree in Computer Science and Engineering </strong> from Islamic University of Science And Technology.
                    </p>
                    <p>  I specialize in building web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and have experience in frontend technologies like HTML5, CSS3, and JavaScript (ES6+).
                        I'm passionate about solving real-world problems and creating impactful, scalable applications. I'm constantly learning and growing in the field to build high-quality products and improve user experiences.</p>

                    <a href={Resume} className="btn">View Resume</a>
                </div>
            </div>
        </section>
    )
}
