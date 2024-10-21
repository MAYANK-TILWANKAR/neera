import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  text: string;
  imageSrc: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, text, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <FaQuoteLeft className="text-3xl text-gray-300 absolute top-4 left-4" />
      <div className="mb-4 pt-6">
        <p className="text-gray-600 italic">{text}</p>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 mr-4 relative">
          <Image
            src={imageSrc}
            alt={`${name}'s profile`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <p className="font-semibold text-gray-800">{name}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
