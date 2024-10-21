import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

const ServiceSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-12 sm:py-10 px-4 sm:px-16">
      <div className="w-full mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="swiper-container mb-10">
          {[
            {
              src: "/serviceimages/1.png",
              alt: "Free One way Mahakaleshwar Temple Drop",
              title: "Free One way Mahakaleshwar Temple Drop",
            },
            {
              src: "/serviceimages/2.png",
              alt: "Yoga and Meditation Spot",
              title: "Yoga and Meditation Spot",
            },

            {
              src: "/serviceimages/4.png",
              alt: "Game Zone",
              title: "Game Zone",
            },
            {
              src: "/serviceimages/3.png",
              alt: "Personalised Travel and Itinerary plans",
              title: "Personalised Travel and Itinerary plans",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide-content">
                <img
                  src={slide.src}
                  loading="lazy"
                  alt={slide.alt}
                  className="w-full h-auto  object-cover rounded-xl shadow-lg"
                />
                <div className="text-center mt-4 font-semibold text-gray-700">
                  {slide.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default ServiceSlider;
