import React from "react";

function EventIntro() {
  return (
    <div className="w-[90%] h-auto bg-white flex flex-col md:flex-row mx-auto md:gap-14 lg:mt-20">
      {/* Left column - Main heading */}
      <div className="md:w-[50%] w-full flex flex-col justify-center py-8 md:py-12">
        <h1
          className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight text-center md:text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Curating extravagant and breath taking experiences from concept to
          execution
        </h1>
      </div>

      {/* Right column - Description */}
      <div className="md:w-[50%] w-full py-8 md:py-12 bg-white flex flex-col justify-center">
        <p
          className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] leading-relaxed text-justify"
          style={{ fontFamily: "BrandingMedium" }}
        >
          We specialize in designing and delivering extraordinary experiences
          tailored to your vision. From the initial spark of an idea to the
          final, flawless execution, we handle every detail with precision,
          creativity, and a passion for excellence—turning once-in-a-lifetime
          moments into unforgettable realities.
        </p>
      </div>
    </div>
  );
}

export default EventIntro;
