"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ReviewCard from "../ui/reviewCard";

interface Review {
  name: string;
  text: string;
  imageSrc: string;
}

const ReviewSection: React.FC = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews: Review[] = [
    {
      name: "Aditya Sharma",
      text: "The stay was one of the coziest ones. The best part was the cleanliness.",
      imageSrc: "/images/person1.jpg",
    },
    {
      name: "Priya Patel",
      text: "Excellent service and beautiful surroundings. Highly recommended!",
      imageSrc: "/images/person2.jpg",
    },
    {
      name: "Rahul Gupta",
      text: "A perfect blend of traditional charm and modern amenities. Will visit again!",
      imageSrc: "/images/person3.jpg",
    },
    {
      name: "Sneha Reddy",
      text: "The staff was incredibly helpful and the rooms were spacious and comfortable.",
      imageSrc: "/images/person1.jpg",
    },
    {
      name: "Vikram Singh",
      text: "Serene lakeside location. The ambiance provided the perfect retreat we sought.",
      imageSrc: "/images/person2.jpg",
    },
  ];

  return (
    <section id="review" className=" py-32 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
            Your Stay Host
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            What Our <span className="text-[#3B82F6]">Clients Say</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-2 sm:px-4">
                <ReviewCard
                  name={review.name}
                  text={review.text}
                  imageSrc={review.imageSrc}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
