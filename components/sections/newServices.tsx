"use client";
import Image from "next/image";
import ServiceSlider from "../ui/serviceSlider";
import ac from "../../public/images/icons/air-conditioner.png";
import bathroom from "../../public/images/icons/male-and-female.png";
import family from "../../public/images/icons/parents.png";
import parking from "../../public/images/icons/garage.png";
import power from "../../public/images/icons/generator.png";
import tea from "../../public/images/icons/coffee-cup.png";
import toiletries from "../../public/images/icons/toiletries.png";
import wifi from "../../public/images/icons/travel.png";

const NewServices: React.FC = () => {
  const services = [
    { id: "1", text: "Air Conditioned Rooms", icon: ac },
    { id: "2", text: "Well-Maintained Washrooms", icon: bathroom },
    { id: "3", text: "Parking Space", icon: parking },
    { id: "4", text: "Wi-Fi Connectivity", icon: wifi },
    { id: "5", text: "Toiletries", icon: toiletries },
    { id: "6", text: "Family Environment", icon: family },
    { id: "7", text: "Power Backup", icon: power },
    { id: "8", text: "Room Service", icon: tea },
  ];

  return (
    <section id="services" className=" py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-5xl md:text-5xl sm:text-4xl font-bold mb-4 text-gray-800">
            Explore Our <span className="text-[#3B82F6]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your stay with our comprehensive range of amenities and
            services designed for your comfort and convenience.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <div className="rounded-full p-4 mb-4">
                <Image
                  src={service.icon}
                  alt={service.text}
                  className="w-12 h-12 object-cover"
                  width={48}
                  height={48}
                />
              </div>
              <p className="text-center font-medium">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
};

export default NewServices;
