// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function Navbar() {
  return (

    <header className="header" data-aos="zoom">
      <div className="logo"><a href="#"><span>LATEEF</span></a></div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#technologies" className="navbar-link">Technologies</a></li>
          <li><a href="#service" className="navbar-link">Services</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </nav>
    </header>
    // <nav className="mb-20 flex items-center justify-between">
    //   <div className="flex flex-shrink-0 items-center  text-2xl">
    //     <p>logo</p>
    //   </div>
    //   <div className=" flex items-center justify-center gap-4 text-2xl">
    //     <FaLinkedin />
    //     <FaGithub />
    //     <FaInstagram />
    //   </div>
    // </nav>
  )
}
