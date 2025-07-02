import React from "react";

function HospitalityIntro() {
  return (
    <div className="w-[90%] h-auto bg-white flex flex-col md:flex-row mx-auto md:gap-14 lg:mt-20">
      {/* Left column - Main heading with improved responsive text */}
      <div className="md:w-[50%] w-full flex flex-col justify-center py-8 md:py-12">
        <h1
          className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight text-center md:text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Creating a myriad of gourmet experiences
        </h1>
      </div>

      {/* Right column - Description with responsive typography */}
      <div className="md:w-[50%] w-full py-8 md:py-12 bg-white flex flex-col justify-center">
        <p
          className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] leading-relaxed text-justify"
          style={{ fontFamily: "BrandingMedium" }}
        >
          Holistic and well-equipped infrastructure marries an experienced team
          at Nesco Foods to create versatile culinary experiences. From
          developing unique food brands, to creating multi-cuisine recipes for
          events and occasions, the brand's understanding of food is vast in its
          breadth but intricate in their level of detail.
        </p>
      </div>
    </div>
  );
}

export default HospitalityIntro;
