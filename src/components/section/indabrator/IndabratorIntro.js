import React from "react";

function IndabratorIntro() {
  return (
    <div className="w-[90%] h-auto lg:h-screen bg-white flex flex-col md:flex-row mx-auto md:gap-14 lg:mt-20">
      {/* Left column - Main heading with improved responsive text */}
      <div className="md:w-[50%] w-full flex flex-col justify-center py-8 md:py-12">
        <h1
          className="text-[4rem] sm:text-[4.4rem] md:text-[5.4rem] lg:text-[5.9rem] font-bold leading-tight mb-6 text-center md:text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          A pioneer of dreams that will engineer tomorrow.
        </h1>
      </div>

      {/* Right column - Description with responsive typography */}
      <div className="md:w-[50%] w-full py-8 md:py-12 bg-white flex flex-col justify-center">
        <div className="space-y-6">
          <p
            className="text-[1.8rem] sm:text-[2rem] md:text-[2.1rem] lg:text-[2.2rem] mb-3 sm:mb-5 leading-[1.4] sm:leading-relaxed text-justify"
            style={{ fontFamily: "BrandingMedium" }}
          >
            Indabrator is an ideal service provider in the engineering segment.
            The company believes in a single-window solution for all
            surface-preparation needs. This includes machines, spares and
            abrasives. Indabrator's leadership is defined by its total immersion
            across the value chain with its own foundry and state-of-the-art
            manufacturing unit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndabratorIntro;
