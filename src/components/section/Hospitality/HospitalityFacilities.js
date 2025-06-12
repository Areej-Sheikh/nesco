import React from "react";
import Image from "next/image";

// Import facility image
import burgerImage from "@/assests/nesco-business-page/bec-elements/40.jpg";

function HospitalityFacilities() {
  return (
    <section className="w-full h-screen overflow-hidden bg-white">
      {/* Section Title with yellow top border */}
      <div className="px-[5%] w-full border-t-2 border-[#ffffff] pt-8 pb-4">
        <h2 
          className="text-[2rem] md:text-[2.2rem] font-bold text-black"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Facilities
        </h2>
      </div>

      {/* Full-height burger image with overlay card - takes up remaining space */}
      <div className="relative w-full h-[calc(100%-120px)]">
        {/* Background Image */}
        <Image
          src={burgerImage}
          alt="Burger at Orchard"
          fill
          className="object-cover"
          priority
        />

        {/* White Card Overlay */}
        <div className="absolute left-[5%] top-[50%] transform -translate-y-1/2 bg-white p-6 md:p-8 w-[270px] md:w-[380px] shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 
              className="text-[1.6rem] md:text-[1.8rem] font-bold"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Orchard
            </h3>
            
            {/* Carousel Indicator moved into the text box */}
            <div className="flex items-center">
              <span className="text-sm text-black/70 border border-gray-300 px-2 py-1 rounded-sm">
                2/4
              </span>
            </div>
          </div>
          
          <p 
            className="text-[0.9rem] md:text-[1rem] leading-[1.7]"
            style={{ fontFamily: "BrandingRegular" }}
          >
            Flanked by open sky and trees, the 
            Orchard is a quick and accessible 
            haven for multi-cuisine. This food 
            court serves up a delightful variety in 
            both takeaway and dine-in formats for 
            every gourmand- leisurely lunches or 
            meals-on-the-go.
          </p>
          
          {/* Carousel Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <button className="text-black/70 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            {/* Dot indicators */}
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            
            <button className="text-black/70 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Facility Cards (Hidden by default) */}
        <div className="hidden">
          {/* These would be additional facility cards in a real implementation */}
        </div>
      </div>
    </section>
  );
}

export default HospitalityFacilities;