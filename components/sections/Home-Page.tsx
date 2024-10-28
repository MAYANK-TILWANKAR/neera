import Image from "next/image";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";

const HomePage: React.FC = () => {
  return (
    <section
      id="homePage"
      className="flex flex-col md:flex-row justify-center items-center min-h-screen p-4 md:p-8 my-0 sm:my-2 ml-0 sm:ml-16">
      <div className="leftSection w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8 md:pr-12">
        <div className="md:mb-10 mt-5 sm:mt-0">
          <h1 className="sectionHeadings font-bold mb-2 text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="text-[#3B82F6] animate-pulse">Neera</span>
            <br />
            <span className="text-gray-700">The Guest House!</span>
          </h1>
        </div>

        <div className="md:hidden ">
          <Image
            src="/images/homepageimage.png"
            alt="Neera Guest House"
            width={500}
            height={300}
            className="object-cover"
            priority
          />
        </div>

        <div className="md:hidden py-2">
          <Marquee speed={40}>
            {[
              "Sacred",
              "Ancient",
              "Serene",
              "Spiritual",
              "Peaceful",
              "Tranquil",
              "Calm",
              "Comfortable",
              "Relaxing",
              "Refreshing",
              "Inviting",
              "Welcoming",
              "Homey",
              "Cozy",
            ].map((word, index) => (
              <span
                key={index}
                className="mx-2 text-sm font-bold italic text-blue-500">
                ✨ {word}
              </span>
            ))}
          </Marquee>
        </div>

        <p className="section1subheading text-center md:text-left mb-6 text-sm sm:text-sm md:text-base lg:text-lg text-gray-600">
          Nestled in front of a tranquil lake in Ujjain, Neera seamlessly blends
          traditional Indian hospitality with modern comfort, promising a
          peaceful and unforgettable stay for your family and friends.
        </p>

        <div className="flex justify-center">
          <a href="#contactUs" className="w-full sm:w-auto">
            <Button
              variant="default"
              className="exploreMoreBtn bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-xl md:text-xl rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
              Book Your Stay Now
            </Button>
          </a>
        </div>
      </div>

      <div className="rightSection w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8 hidden md:flex justify-center items-center md:pl-12">
        <div className="w-full max-w-xl relative">
          <Image
            src="/images/homepageimage.png"
            alt="Neera Guest House"
            width={800}
            height={600}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 "></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
