"use client";
import React, { useState } from "react";
import Image from "next/image";

// Import facility images for carousel
import burgerImage from "@/assests/nesco-business-page/nesco-food-elements/29.jpg";
import cafeteriaImage from "@/assests/nesco-business-page/nesco-food-elements/21.jpg";
import loungeImage from "@/assests/nesco-business-page/nesco-food-elements/22.jpg";
import restaurantImage from "@/assests/nesco-business-page/nesco-food-elements/23.jpg";

function HospitalityFacilities() {
  // Dummy data for hospitality facilities
  const facilities = [
    {
      id: 1,
      name: "Food Court",
      image: burgerImage,
      description: "A vibrant space offering diverse culinary options from around the world. Our food court serves quick, delicious meals with multiple cuisines including Indian, Chinese, Continental and more, perfect for busy professionals on the go."
    },
    {
      id: 2,
      name: "Orchard",
      image: burgerImage,
      description: "Flanked by open sky and trees, the Orchard is a quick and accessible haven for multi-cuisine. This food court serves up a delightful variety in both takeaway and dine-in formats for every gourmand- leisurely lunches or meals-on-the-go."
    },
    {
      id: 3,
      name: "Executive Lounge",
      image: burgerImage,
      description: "An exclusive space designed for business meetings and networking. The Executive Lounge offers premium service, sophisticated ambiance and curated menus featuring gourmet selections and artisanal beverages in an intimate setting."
    },
    {
      id: 4,
      name: "Nesco Kitchen",
      image: burgerImage,
      description: "Our flagship restaurant specializes in authentic regional cuisines prepared by expert chefs. Nesco Kitchen combines traditional recipes with modern presentation, offering guests a true taste of India's diverse culinary heritage."
    }
  ];

  // State to track current slide
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Orchard (index 1)

  // Navigate to previous slide
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? facilities.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Navigate to next slide
  const goToNext = () => {
    const isLastSlide = currentIndex === facilities.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Get current facility data
  const currentFacility = facilities[currentIndex];

  return (
    <section className="w-full h-screen overflow-hidden bg-white">
      {/* Section Title with green top border */}
      <div className="px-[5%] w-full border-t-2 border-[#7cc14f] pt-8 pb-4">
        <h2 
          className="text-[2rem] md:text-[2.2rem] font-bold text-black"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Facilities
        </h2>
      </div>

      {/* Full-height image with overlay card - takes up remaining space */}
      <div className="relative w-full h-[calc(100%-120px)]">
        {/* Background Image - Dynamically changes */}
        <Image
          src={currentFacility.image}
          alt={`${currentFacility.name}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />

        {/* White Card Overlay */}
        <div className="absolute left-[5%] top-[50%] transform -translate-y-1/2 bg-white p-6 md:p-8 w-[470px] md:w-[580px] shadow-md h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
          <div className="flex justify-between items-center mb-4">
            <h3 
              className="text-[1.6rem] md:text-[1.8rem] font-bold"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {currentFacility.name}
            </h3>
            
            {/* Carousel Indicator */}
            <div className="flex items-center">
              <span className="text-sm text-black/70 border border-gray-300 px-2 py-1 rounded-sm">
                {currentIndex + 1}/{facilities.length}
              </span>
            </div>
          </div>
          
          <p 
            className="text-[0.9rem] md:text-[1rem] leading-[1.7]"
            style={{ fontFamily: "BrandingRegular" }}
          >
            {currentFacility.description}
          </p>
          
          {/* Carousel Navigation Controls */}
          <div className="flex justify-between items-center mt-6 absolute bottom-6 left-6 right-6">
            <button 
              className="text-black/70 hover:text-black transition-colors"
              onClick={goToPrevious}
              aria-label="Previous facility"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            {/* Dot indicators - Dynamic based on current index */}
            <div className="flex gap-1">
              {facilities.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  } transition-colors cursor-pointer`}
                  onClick={() => setCurrentIndex(index)}
                  role="button"
                  aria-label={`Go to slide ${index + 1}`}
                  tabIndex="0"
                ></div>
              ))}
            </div>
            
            <button 
              className="text-black/70 hover:text-black transition-colors"
              onClick={goToNext}
              aria-label="Next facility"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HospitalityFacilities;