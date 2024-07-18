import { useEffect } from 'react'
import problemImg from '../assets/problem1.jpg'
import Aos from 'aos'


const ProblemAndSolution = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  })

  return (
    <section  id="about" className="text-gray-600 body-font border-b-2 border-gray-300 " >
        <div className="mt-12">
    <h1 className="text-black text-4xl font-semibold text-center">Problem and solution</h1>
    <div className="flex mt-3 justify-center">
        <div className="w-28 h-1 rounded-full bg-pink-500 inline-flex"></div>
      </div>
        </div>
    <div className="container px-5 pt-10 pb-14 mx-auto flex flex-wrap">
      <div data-aos="fade-right" className="lg:w-1/2 w-auto mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" className="object-cover object-center h-full md:h-[29rem] w-full" src={problemImg} />
      </div>
      <div  className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div data-aos="fade-left" className="flex flex-col mb-10 lg:items-start items-center">
          
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">why do we need to develop this platform.</h2>
            <p className="leading-relaxed text-base">Users may face the challenge of finding reliable, comprehensive resources on specific subjects without spending excessive time searching through various sources. An online library that provides easy access to well-organized, high-quality materials across all categories can solve this problem, ensuring users can efficiently locate the information they need.</p>
            
          </div>
        </div>
        <div data-aos="fade-left" className="flex flex-col mb-10 lg:items-start items-center">
          
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">How can I quickly find reliable resources for a specific subject in the online library?</h2>
            <p className="leading-relaxed text-base">To quickly find reliable resources for a specific subject in our online library, use the advanced search feature which allows you to filter results by category, publication date, author, and resource type (e.g., books, articles, videos). Additionally, our curated subject guides and recommended reading lists provide expert-selected materials to ensure you have access to the most trusted and relevant information.</p>
            
          </div>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default ProblemAndSolution
