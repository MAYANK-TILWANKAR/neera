"use client";
import "../../app/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import ReviewCard from "../../components/ui/reviewCard";

const GallarySlider: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider className="mt-10 mt-14" {...settings}>
        <div className="serviceImage relative overflow-hidden rounded-lg shadow-md">
          <div className="absolute inset-0 flex items-center justify-center"></div>
          <Image
            src="https://picsum.photos/1200/1200"
            width={200}
            height={200}
            alt="Gallery"
            className="serviceImage1"
          />
        </div>

        <div className="serviceImage">
          <Image
            src="https://picsum.photos/1200/1200"
            width={200}
            height={200}
            alt="Gallery"
            className="serviceImage1"
          />
        </div>
        <div className="serviceImage">
          <Image
            src="https://picsum.photos/1200/1200"
            width={200}
            height={200}
            alt="Gallery"
            className="serviceImage1"
          />
        </div>
        <div className="serviceImage">
          <Image
            src="https://picsum.photos/1200/1200"
            width={200}
            height={200}
            alt="Gallery"
            className="serviceImage1"
          />
        </div>
        <div className="serviceImage">
          <Image
            src="https://picsum.photos/1200/1200"
            width={200}
            height={200}
            alt="Gallery"
            className="serviceImage1"
          />
        </div>
      </Slider>
    </>
  );
};

export default GallarySlider;
