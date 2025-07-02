import React from "react";
import Image from "next/image";

// Import service images
import weddingImage from "@/assests/nesco-business-page/nesco-food-elements/21.jpg";
import exhibitionsImage from "@/assests/nesco-business-page/nesco-food-elements/22.jpg";
import cateringImage from "@/assests/nesco-business-page/nesco-food-elements/23.jpg";

function HospitalityServices() {
  const spaces = [
    {
      title: "Exhibitions",
      image: weddingImage,
      alt: "Wedding and celebration catering services",
    },
    {
      title: "Weddings & Social Celebrations",
      image: exhibitionsImage,
      alt: "Exhibition catering services",
    },
    {
      title: "Outdoor Catering",
      image: cateringImage,
      alt: "Outdoor catering services",
    },
  ];

  return (
    <div className="w-full bg-blue-800 py-4 sm:py-6 md:py-8 lg:py-8 px-4 sm:px-6 lg:px-8">
      {/* Spaces Grid */}
      <div className="max-w-7xl mx-auto lg:mt-20">
        {/* Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {spaces.map((space, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Container - Better responsive heights and aspect ratios */}
              <div className="w-full max-w-sm h-48 sm:h-64 md:h-72 lg:h-[36rem] mb-3 sm:mb-4 lg:mb-6 overflow-hidden relative rounded-lg shadow-lg">
                <Image
                  src={space.image}
                  alt={space.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Title Below Image - Improved mobile readability while keeping lg styles */}
              <h3 className="text-white text-base sm:text-lg lg:text-2xl font-light italic text-center px-2 leading-relaxed">
                {space.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HospitalityServices;
