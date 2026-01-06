import React from 'react';

function IndabratorIntro() {
  return (
    <div className="w-[90%] lg:min-h-screen bg-white flex flex-col md:flex-row mx-auto md:gap-14">
      {/* Left column - Main heading with improved responsive text */}
      <div className="md:w-[50%] w-full flex flex-col justify-center py-8 md:py-12">
        <h1
          className="text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[5rem] font-bold leading-[1.1] sm:leading-[1.15] mb-4 sm:mb-6 text-left"
          style={{ fontFamily: 'BrandingSemibold' }}
        >
          A pioneer of dreams that will engineer tomorrow.
        </h1>
      </div>

      {/* Right column - Description with responsive typography */}
      <div className="md:w-[50%] w-full py-8 md:py-12 bg-white flex flex-col justify-center">
        <div className="space-y-6">
          <p
            className="text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[1.6] sm:leading-[1.65] md:leading-[2] text-gray-800 "
            style={{ fontFamily: 'BrandingMedium' }}
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
