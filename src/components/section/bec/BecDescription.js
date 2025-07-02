import React from "react";

function BecDescription() {
  return (
    <div className="w-[90%] bg-white flex flex-col lg:flex-row overflow-hidden lg:min-h-screen justify-center items-center lg:gap-20 mx-auto">
      {/* Left column - Main heading */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center items-center pt-12 sm:pt-16 md:pt-10 lg:pt-0">
        <h1
          className="text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[5rem] font-bold leading-[1.1] sm:leading-[1.15] mb-4 sm:mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          A Confluence of business & cultures
        </h1>
      </div>

      {/* Right column - Description */}
      <div className="w-full lg:w-[60%] py-8 sm:pb-12 md:pb-16 lg:pb-10 xl:pb-12 flex flex-col justify-center items-center ">
        <div className="space-y-5 sm:space-y-6 md:space-y-7 max-w-none lg:max-w-4xl xl:max-w-5xl flex flex-col items-center justify-between text-justify h-full ">
          <p
            className="text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[1.6] sm:leading-[1.65] md:leading-[2] text-gray-800"
            style={{ fontFamily: "BrandingMedium" }}
          >
            If business is on the cards, all roads lead to the Bombay Exhibition
            Center. Founded in 1991, the BEC reflects Belief and Opportunity.
            Bringing over millions of ideas to life, the Center has helped the
            globe converge in Mumbai with a common purpose.
          </p>
          <p
            className="text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[1.6] sm:leading-[1.65] md:leading-[2] text-gray-800"
            style={{ fontFamily: "BrandingMedium" }}
          >
            As a space of limitless possibility, the BEC is endlessly
            customisable. With robust infrastructure, the center paces itself to
            global standards. The wide options of venues, the versatility packed
            within, are topped with helpful services.
          </p>
          <p
            className="text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[1.6] sm:leading-[1.65] md:leading-[2] text-gray-800"
            style={{ fontFamily: "BrandingMedium" }}
          >
            The BEC has attained historical status in Mumbai as the ideal
            location for exhibitions, MICE, trade shows, business displays,
            events and entertainment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BecDescription;
