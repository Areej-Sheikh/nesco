"use client";
import React, { useState } from "react";
import Image from "next/image";

// Import facility images
import orchardImage from "@/assests/nesco-business-page/bec-elements/40.jpg";
import cafeteriaImage from "@/assests/nesco-business-page/bec-elements/33.jpg";
import foodCourtImage from "@/assests/nesco-business-page/bec-elements/34.jpg";
import restaurantImage from "@/assests/nesco-business-page/bec-elements/35.jpg";

function HospitalityFacilities() {
  const facilities = [
    {
      id: 1,
      name: "The Hall",
      image: orchardImage,
      description:
        "An expansive multi-function exhibition hall with over 25,000 sq.ft of open space. Perfect for large-scale events, exhibitions, and corporate functions. Equipped with state-of-the-art lighting systems and utility connections throughout the space.",
    },
    {
      id: 2,
      name: "Orchard",
      image: orchardImage,
      description:
        "Flanked by open sky and trees, the Orchard is a quick and accessible haven for multi-cuisine. This food court serves up a delightful variety in both takeaway and dine-in formats for every gourmand- leisurely lunches or meals-on-the-go.",
    },
    {
      id: 3,
      name: "The Pavilion",
      image: orchardImage,
      description:
        "A versatile indoor-outdoor space that combines the comfort of a sheltered venue with the natural ambiance of open surroundings. The Pavilion offers 12,000 sq.ft of flexible space for product launches, networking events or casual gatherings.",
    },
    {
      id: 4,
      name: "Conference Center",
      image: orchardImage,
      description:
        "Our premium meeting space equipped with advanced audio-visual technology and comfortable seating for up to 200 attendees. The Conference Center includes breakout rooms and dedicated catering areas for productive business meetings.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? facilities.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === facilities.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentFacility = facilities[currentIndex];

  return (
    <div className="w-full overflow-hidden">
      {/* Section Title */}
      <div className="px-[5%] w-full border-t-2 border-white py-3 sm:py-4 md:py-6 lg:pt-24">
        <h2
          className="text-[1.3rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.2rem] font-bold text-black"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Facilities
        </h2>
      </div>

      {/* Image Background with Overlay Card */}
      <div className="relative w-full h-[500px] sm:h-[450px] md:h-[500px] lg:h-[calc(100vh-120px)]">
        {/* Background Image */}
        <Image
          src={currentFacility.image}
          alt={currentFacility.name}
          fill
          className="object-cover transition-opacity duration-500"
          priority
          sizes="100vw"
        />

        {/* White Card */}
        <div
          className="absolute left-0 sm:left-[5%] lg:bottom-10 bottom-0 bg-white p-4 sm:p-5 md:p-6 lg:p-8 
                    w-full sm:w-[70%] md:w-[60%] lg:w-[450px] shadow-md 
                    max-h-[60%] overflow-y-auto"
        >
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <h3
              className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold pr-4"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {currentFacility.name}
            </h3>

            <span className="text-xs sm:text-sm text-black/70 border border-gray-300 px-2 py-1 rounded-sm">
              {currentIndex + 1}/{facilities.length}
            </span>
          </div>

          <p
            className="text-[0.85rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] leading-[1.4] mb-4 pr-2"
            style={{ fontFamily: "BrandingMedium" }}
          >
            {currentFacility.description}
          </p>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              className="text-black/70 hover:text-black transition-colors p-2"
              onClick={goToPrevious}
              aria-label="Previous facility"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2 sm:gap-1.5 md:gap-2">
              {facilities.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-black" : "bg-gray-300"
                  } transition-colors`}
                  onClick={() => setCurrentIndex(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${index + 1}`}
                ></div>
              ))}
            </div>

            <button
              className="text-black/70 hover:text-black transition-colors p-2"
              onClick={goToNext}
              aria-label="Next facility"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalityFacilities;
