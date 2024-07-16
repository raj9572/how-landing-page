
import image from '../assets/home.jpg'
const HeroSection = () => {
  return (
    <section id="home" className="text-gray-600 body-font  border-b-2 border-gray-300 ">
  <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">House of Wisdom, Where Knowledge flows frelly!
        <br className="hidden lg:inline-block"/>A library open to all
      </h1>
      <p className="mb-8 leading-relaxed">Discover a world of Knowledge and fun with Learn while playing in the House of Wisdom , Where learning is always an adventure! . the House of Wisdom ensures that learning is always an exciting and memorable experience. Come join us and turn education into an unforgettable journey! </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-pink-500 rounded-xl py-2 px-6 focus:outline-none hover:bg-pink-600 font-medium text-lg">Explore</button>
      </div>
    </div>
    <div className="lg:max-w-md lg:w-full md:w-1/3 w-5/6">
      <img className="object-cover object-center rounded-lg" alt="hero" src={image} />
    </div>
  </div>
</section>
  )
}

export default HeroSection
