import { useState } from "react"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    const [dropdown,setDropdown] = useState(false)
  return (
    <>
     <div className="shadow-md shadow-gray-300 sticky top-0 z-20 bg-white ">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">

            <div className="flex items-center flex-col gap-x-1">
            <h1 className="text-2xl font-bold text-pink-500 ">Houseof-Wisdom</h1>
            
             </div>


             <div className=" md:block gap-3 hidden ">
                <div>
                <a href="#home" className='mx-4 text-black font-semibold text-xl  hover:text-pink-500 cursor-pointer'>Home</a>
                 <a href="#about" className='mx-4 text-black font-semibold text-xl  hover:text-pink-500 cursor-pointer'>About</a>
                 <a href="#services" className='mx-4 text-black font-semibold text-xl  hover:text-pink-500 cursor-pointer'>Service</a>
                 <a href="#community" className='mx-4 text-black font-semibold text-xl  hover:text-pink-500 cursor-pointer'>Community</a>
                 <a href="#contact" className='mx-4 text-black font-semibold text-xl  hover:text-pink-500 cursor-pointer'>Contact</a>
              
                </div>
                </div>

              <div className='ml-4 flex gap-2  md:hidden '>
            {dropdown && <div  className="absolute right-5 bg-white py-4 top-12 rounded-md px-2 w-44">
                <ul>
                    <a href="#home" ><li className='py-1 font-medium text-lg hover:text-base hover:text-pink-500'>Home</li></a>
                    <a href="#about" ><li className='py-1 font-medium  text-lg hover:text-base hover:text-pink-500'>About</li></a>
                    <a href="#services" ><li className='py-1 font-medium  text-lg hover:text-base hover:text-pink-500'>Service</li></a>
                    <a href="#community" ><li className='py-1 font-medium  text-lg hover:text-base hover:text-pink-500'>Team</li></a>
                    <a href="#contact" ><li className='py-1 font-medium  text- hlgover:text-base hover:text-pink-500'>Contact</li></a>
                </ul>
            </div>}

            <FaBars  onClick={()=>{setDropdown(!dropdown)}} className='w-8 h-8 cursor-pointer text-pink-500 ' />
            
        </div>

            </div>
     </div>
      
    </>
  )
}

export default Navbar
