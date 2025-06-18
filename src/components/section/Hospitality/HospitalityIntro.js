import React from "react";

function HospitalityIntro() {
  return (
    <section className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading */}
      <div className="md:w-1/2 w-full p-[5%] flex flex-col justify-center">
        <h1 
          className="text-[4.5rem] md:text-[5rem] font-bold leading-tight mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Creating a myriad of gourmet experiences
        </h1>
      </div>
      
      {/* Right column - Description */}
      <div className="md:w-1/2 w-full p-[5%] bg-gray-50 flex flex-col justify-center">
        <p 
          className="text-[1.5rem] md:text-[1.7rem] mb-5 leading-relaxed"
          style={{ fontFamily: "BrandingRegular" }}
        >
          Holistic and well-equipped infrastructure marries an experienced team at Nesco Foods to create versatile culinary experiences.
        </p>
        <p 
          className="text-[1.5rem] md:text-[1.7rem] leading-relaxed"
          style={{ fontFamily: "BrandingRegular" }}
        >
          From developing unique food brands, to creating multi-cuisine recipes for events and occasions, the brand's understanding of food is vast in its breadth but intricate in their level of detail.
        </p>
      </div>
    </section>
  );
}

export default HospitalityIntro;