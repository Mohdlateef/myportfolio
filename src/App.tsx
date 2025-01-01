import Navbar from './components/Navbar';
function App() {

  return (
    <div className="ovoerflow-x-hidden text-neutral-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

        </div>
      </div>

      <div className="mx-auto px-12">
        <Navbar />

      </div>
    </div>
  )
}

export default App
