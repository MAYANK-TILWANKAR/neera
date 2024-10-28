"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function NearbyAtraction() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const attractionImages = [
    {
      src: "/images/nearby/mahakaltemple.jpg",
      alt: "Mahakaleshwar Temple",
      title: "Mahakaleshwar Temple",
      description:
        "One of the twelve Jyotirlingas, this temple houses a self-manifested Shivalinga and is dedicated to Lord Shiva as the ruler of time.",
      link: "https://en.wikipedia.org/wiki/Mahakaleshwar_Jyotirlinga",
    },
    {
      src: "/images/nearby/harsiddhi-temple.png.webp",
      alt: "Harsiddhi Temple",
      title: "Harsiddhi Temple",
      description:
        "Known as a Shakti Peetha, this temple is linked to the story of Sati and showcases centuries of devotion through its Maratha-era renovations.",
      link: "https://ujjain.nic.in/en/tourist-place/harsiddhi/",
    },
    {
      src: "/images/nearby/Chintaman-Ganesh.jpg",
      alt: "Chintaman Mandir",
      title: "Chintaman Mandir",
      description:
        "This 1,000-year-old temple on the Shipra River's banks is dedicated to Lord Ganesh, believed to remove worries and bestow prosperity.",
      link: "https://en.wikipedia.org/wiki/Chintaman_Ganesh_Temple,_Ujjain",
    },
    {
      src: "/images/nearby/kal-bhairav.png",
      alt: "Kal Bhairav Temple",
      title: "Kal Bhairav Temple",
      description:
        "Dedicated to Ujjain's guardian deity, Kal Bhairav, this temple is famous for its unique ritual of offering liquor to the deity.",
      link: "https://en.wikipedia.org/wiki/Kal_Bhairav_Temple,_Ujjain",
    },
    {
      src: "/images/nearby/ramghat.jpg",
      alt: "Ram Ghat",
      title: "Ram Ghat",
      description:
        "A sacred bathing ghat on the Shipra River, Ram Ghat is renowned for its spiritual significance and as a key venue for the Kumbh Mela.",
      link: "https://en.wikipedia.org/wiki/Shipra_River",
    },
    {
      src: "/images/nearby/iskon.jpg",
      alt: "ISKCON Temple",
      title: "ISKCON Temple",
      description:
        "This beautiful temple dedicated to Lord Krishna offers spiritual enlightenment and promotes Bhakti Yoga in a serene environment.",
      link: "https://en.wikipedia.org/wiki/International_Society_for_Krishna_Consciousness",
    },
  ];

  const moreAttractionImages = [
    {
      src: "/images/nearby/gopal-mandir.png",
      alt: "Gopal Mandir",
      title: "Gopal Mandir",
      description:
        "A historic temple dedicated to Lord Krishna, Gopal Mandir is celebrated for its architectural beauty and religious importance.",
      link: "https://en.wikipedia.org/wiki/Gopal_Mandir",
    },
    {
      src: "/images/nearby/Mahakallok.png",
      alt: "Mahakal Lok",
      title: "Mahakal Lok",
      description:
        "A newly developed corridor around Mahakaleshwar Temple, showcasing Ujjain's rich cultural and spiritual heritage through various attractions.",
      link: "https://hi.wikipedia.org/wiki/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80_%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%95%E0%A4%BE%E0%A4%B2_%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%B2%E0%A5%8B%E0%A4%95",
    },
    {
      src: "/images/nearby/Baglamukhi-mandir.png",
      alt: "Baglamukhi Mata Mandir",
      title: "Baglamukhi Mata Mandir",
      description:
        "This temple, dedicated to Goddess Baglamukhi, is known for its spiritual power and unique rituals that attract devotees from far and wide.",
      link: "https://en.wikipedia.org/wiki/Bagalamukhi_Temple,_Nalkheda",
    },
    {
      src: "/images/nearby/Dewas-tekri.png",
      alt: "Dewas Tekri",
      title: "Dewas Tekri",
      description:
        "A hilltop offering panoramic views of Ujjain, Dewas Tekri houses temples dedicated to Chamunda Mata and Tulja Bhavani.",
      link: "https://en.wikipedia.org/wiki/Dewas_Tekri",
    },
    {
      src: "/images/nearby/Mangalnathtemple.jpeg",
      alt: "Mangalnath Temple",
      title: "Mangalnath Temple",
      description:
        "Believed to be the birthplace of Mars (Mangal), this temple is an important astrological and spiritual site attracting many visitors.",
      link: "https://en.wikipedia.org/wiki/Mangalnath_Temple",
    },
    {
      src: "/images/nearby/sandipani.jpg",
      alt: "Sandipani Ashram",
      title: "Sandipani Ashram",
      description:
        "An ancient hermitage where Lord Krishna and Sudama are said to have received their education from the revered Sage Sandipani.",
      link: "https://ujjain.nic.in/tourist-place/%E0%A4%B8%E0%A4%BE%E0%A4%82%E0%A4%A6%E0%A5%80%E0%A4%AA%E0%A4%A8%E0%A4%BF-%E0%A4%86%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%AE/",
    },
  ];

  return (
    <section
      id="nearbyAttraction"
      className="sm:py-[90px] py-0 -mt-0 sm:-mt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center pb-10">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 mb-2">
            Nearby
            <span className="text-[#3B82F6]"> Attractions</span>
          </h1>
          <p className="sm:text-lg text-base text-gray-600">
            Explore the rich spiritual and cultural heritage of Ujjain with
            these nearby attractions:
          </p>
        </header>

        <Swiper
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="swiper-container mb-8">
          {attractionImages.map((attraction, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow flex flex-col p-4">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={attraction.src}
                      alt={attraction.alt}
                      width={800}
                      height={600}
                      className="rounded-md cursor-pointer object-cover"
                      onClick={() => openImage(attraction.src)}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex-grow mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex justify-end">
                    <Link href={attraction.link}>
                      <Button className="bg-green-600 text-white rounded-full p-2">
                        <PlusIcon className="text-white" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="swiper-container">
          {moreAttractionImages.map((attraction, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow flex flex-col p-4">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      priority
                      width={800}
                      height={600}
                      src={attraction.src}
                      alt={attraction.alt}
                      className="rounded-md cursor-pointer object-cover"
                      onClick={() => openImage(attraction.src)}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex-grow mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex justify-end">
                    <Link href={attraction.link}>
                      <Button className="bg-green-600 text-white rounded-full p-2">
                        <PlusIcon className="text-white" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}>
          <Image
            src={selectedImage}
            alt="Full-screen"
            width={1920}
            height={1080}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}

interface PlusIconProps {
  [key: string]: any;
}

const PlusIcon: React.FC<PlusIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
};
