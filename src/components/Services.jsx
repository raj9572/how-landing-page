import { FaBookOpen, FaSearch } from "react-icons/fa"
import { MdOutlineRecommend } from "react-icons/md";
import { AiFillInteraction } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { useEffect } from "react";
import Aos from "aos";

const Services = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <section id="services" className="text-gray-600 body-font border-b-2 border-gray-300 animate-appear">
  <div className="container px-5 py-14 mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-semibold title-font text-gray-900 mb-4">Our Services</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The House of Wisdom offers exceptional service, combining education and adventure to make every visit enjoyable and enriching.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-6 space-y-6">
      <div data-aos="fade-up-right" className="p-4 md:w-1/3 flex flex-col text-center items-center shadow-lg">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-5 flex-shrink-0">
        <FaSearch className="text-xl" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Advanced Search and Filters</h2>
          <p className="leading-relaxed text-base">Allow users to refine searches by subject, author, date, and resource type, making it easy to find specific materials quickly and accurately.</p>
          <a className="mt-3 text-pink-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div data-aos="fade-up" className="p-4 md:w-1/3 flex flex-col text-center items-center shadow-lg">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-5 flex-shrink-0">
        <MdOutlineRecommend className="text-3xl" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Personalized Recommendations</h2>
          <p className="leading-relaxed text-base">Suggest resources based on users’ past searches and interests, helping them discover new and relevant materials.</p>
          <a className="mt-3 text-pink-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div data-aos="fade-up-left" className="p-4 md:w-1/3 flex flex-col text-center items-center shadow-lg">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-5 flex-shrink-0">
        <AiFillInteraction className="text-4xl" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Interactive Content</h2>
          <p className="leading-relaxed text-base">Incorporate videos, quizzes, and interactive modules to make learning more engaging and dynamic.</p>
          <a className="mt-3 text-pink-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div data-aos="fade-up-right" className="p-4 md:w-1/3 flex flex-col text-center items-center shadow-lg">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-5 flex-shrink-0">
        <FaBookOpen className="text-2xl" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Bookmark and Notes</h2>
          <p className="leading-relaxed text-base">Allow users to bookmark resources and add personal notes, making it easier to return to important materials and keep track of insights.</p>
          <a className="mt-3 text-pink-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div data-aos="fade-up-left" className="p-4 md:w-1/3 flex flex-col text-center items-center shadow-lg">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-5 flex-shrink-0">
        <IoLanguageSharp className="text-2xl" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Multi-Language Support:</h2>
          <p className="leading-relaxed text-base">Offer resources and interface options in multiple languages to cater to a diverse user base.</p>
          <a className="mt-3 text-pink-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Services
