import 'react-toastify/dist/ReactToastify.css';
import DataReview from "./components/Statistic"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProblemAndSolution from "./components/ProblemAndSolution"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import { ToastContainer } from 'react-toastify';


function App() {

  return (
     <>
     <Navbar/>
     <ToastContainer />
     <div className="max-w-7xl mx-auto">
     <HeroSection/>
     <ProblemAndSolution/>
     <Services/>
     <DataReview/>
     <Contact/>
     </div>
     <Footer/>
     
     
     </>
  
  )
}

export default App
