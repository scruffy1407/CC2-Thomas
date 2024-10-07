import Image from 'next/image';
import HeroImage from '/public/images/Hero.webp';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export function Hero() {
  return (
    <section className="relative pt-2 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center text-center z-0">
        
        {/* Hoverable Section */}
        <div className="w-fit mb-5 px-4 lg:px-12 flex justify-center lg:justify-start relative z-0">
          <div className="w-full bg-custom-super-light-green p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            <p className="text-sm lg:text-base text-gray-600">
              Whatever your size, sector, or stage of growth 🙌
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-2/3 text-center px-6 lg:px-12">    
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Grow Your <span className="bg-gradient-to-r from-[#004d3f] to-[#c2e6d4] bg-clip-text text-transparent">Wealth</span> <br /> The Modern Finance Platform.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Keep your personal & business accounts safely organized under one roof. Track, plan, and grow efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/Pricing" className="flex items-center justify-center px-6 py-3 bg-custom-light-green text-black rounded-md hover:bg-custom-green hover:text-white transition duration-300 text-center">
              Discover our offers <ArrowUpRightIcon className="w-5 h-5 ml-2" />
            </a>
            <a href="/Products" className="px-6 py-3 bg-white text-black border-green-500 rounded-md hover:bg-custom-green hover:text-white transition duration-300 text-center">
              Learn More
            </a>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="w-full flex justify-center mt-7 first-line:overflow-hidden">
          <div className="relative h-64 lg:h-[400px] w-full">
            <Image
              src={HeroImage}
              alt="Hero"
              className="absolute top-0 w-full h-full object-cover object-top hover:scale-105 transition-all"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
