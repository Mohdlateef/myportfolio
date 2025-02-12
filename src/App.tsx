import About from './components/About';
import Contact from './components/contact';
import Hero from './components/Hero';
import MyServices from './components/MyServices';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import "./App.css";
import Footer from './components/Footer';
function App() {

  return (
    <div className="ovoerflow-x-hidden">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen ">

        </div>
      </div>

      <div>
        <div className='sticky z-50'>
          <Navbar />
        </div>
        <Hero />
        <About />
        <Technologies />
        <MyServices />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
