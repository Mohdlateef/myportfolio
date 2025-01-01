import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center  text-2xl">
        <p>logo</p>
      </div>
      <div className=" flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  )
}
