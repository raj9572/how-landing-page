import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Services from "./components/Services"



function App() {

  return (
     <>
     <Navbar/>
     <div className="max-w-7xl mx-auto">
     <HeroSection/>
     <Services/>
     </div>
     
     
     </>
  
  )
}

export default App
