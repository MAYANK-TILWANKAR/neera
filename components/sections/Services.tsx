"use client";
import Image from "next/image";
import placeholder1 from "../images/download.jpeg";
import ac from "../images/ac.png";
import clean from "../images/clean.png";
import parking from "../images/parking.png";
import wifi from "../images/wifi.png";
import games from "../images/games.png";
import family from "../images/family.png";

const Services: React.FC = () => {
  const items = [
    { text: "Air Conditioned Rooms", active: false, icon: ac },
    { text: "Well-Maintained Washrooms", active: true, icon: clean },
    {
      text: "Ample Parking for 2 and 4-Wheelers",
      active: false,
      icon: parking,
    },
    { text: "High-Speed Wi-Fi", active: false, icon: wifi },
    { text: "Indoor Games and Entertainment", active: false, icon: games },
    { text: "Family-Friendly Environment", active: false, icon: family },
  ];

  return (
    <section id="services" className=" py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-black">Explore Our </span>
              HomeStay Services
            </h2>
            <p className="text-gray-600 text-lg">
              We provide a range of exceptional services and amenities designed
              to make your stay comfortable and memorable.
            </p>
          </div>
          <a href="#contactUs" className="w-full md:w-auto">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300 w-full md:w-auto">
              Book Now
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Free Temple Drop",
              description:
                "Complimentary one-way drop to Mahakaleshwar Temple.",
            },
            {
              title: "Yoga & Meditation",
              description: "Dedicated space for yoga and meditation practices.",
            },
            {
              title: "Reading Corner",
              description: "Curated collection of books and reading materials.",
            },
            {
              title: "Custom Travel Plans",
              description:
                "Personalized itineraries for your Ujjain adventure.",
            },
          ].map((service, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-md ">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Image
                src={placeholder1}
                alt={service.title}
                className="rounded-lg w-full h-48 object-cover"
                width={300}
                height={200}
              />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Additional Amenities
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <Image
                  src={item.icon}
                  alt=""
                  className="w-8 h-8 mr-4"
                  width={32}
                  height={32}
                />
                <span className="text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
