"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const galleryImages = [
    { src: "/gallery/2.jpg", alt: "Bathroom", title: "Bathroom" },
    { src: "/gallery/3.jpg", alt: "Badroom", title: "Bathroom" },
    { src: "/gallery/4.jpg", alt: "Bedroom", title: "Bedroom" },
    { src: "/gallery/6.jpg", alt: "Bedroom", title: "Bedroom" },
    { src: "/gallery/7.jpg", alt: "Bedroom", title: "Bedroom" },
    { src: "/gallery/27.jpg", alt: "Interior", title: "Interior" },
    { src: "/gallery/8.jpg", alt: "Television", title: "Television" },
    { src: "/gallery/9.jpg", alt: "Air Conditioner", title: "Air Conditioner" },
    { src: "/gallery/11.jpg", alt: "Reading Light", title: "Reading Light" },
    { src: "/gallery/12.jpg", alt: "Game Zone", title: "Game Zone" },
    {
      src: "/gallery/13.jpg",
      alt: "Meditation Spot",
      title: "Meditation Spot",
    },
    { src: "/gallery/22.jpg", alt: "Balcony", title: "Balcony" },
    { src: "/gallery/23.jpg", alt: "Beauty", title: "Beauty" },
    { src: "/gallery/24.jpg", alt: "Exterior", title: "Exterior" },

    {
      src: "/gallery/28.jpg",
      alt: "Family Friendly Environment",
      title: "Family Friendly Environment",
    },
  ];

  return (
    <section className=" sm:py-[90px] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pb-10">
          <h2 className="sm:text-5xl text-3xl font-bold text-gray-800 mb-2">
            Our <span className="text-[#3B82F6]">Gallery</span>
          </h2>
          <p className="sm:text-lg text-base text-gray-600">
            Explore the essence of beauty in our gallery intimate space.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
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
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide-content">
                <img
                  className="w-full h-96 object-cover cursor-pointer"
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openImage(image.src)}
                />
                <div className="text-center mt-4 font-semibold text-[#3B82F6]">
                  {image.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0  bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}>
          <img
            src={selectedImage}
            alt="Full-screen"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
