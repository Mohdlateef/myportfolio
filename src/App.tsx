import About from './components/About';
import Contact from './components/contact';
import Hero from './components/Hero';
import MyServices from './components/MyServices';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import "./App.css";
function App() {

  return (
    <div className="ovoerflow-x-hidden">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen ">

        </div>
      </div>

      <div className="container mx-auto px-12">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <MyServices />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
