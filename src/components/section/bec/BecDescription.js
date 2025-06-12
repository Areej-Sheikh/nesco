import React from "react";
import Image from "next/image";

// Import hall images
import exhibitionImg from "@/assests/nesco-business-page/bec-elements/33.jpg";
import celebrationImg from "@/assests/nesco-business-page/bec-elements/34.jpg";
import miceImg from "@/assests/nesco-business-page/bec-elements/35.jpg";

function BecDescription() {
  return (
    <section className="w-full max-w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading */}
      <div className="md:w-1/2 w-full p-[5%] flex flex-col justify-center">
        <h1 
          className="text-[2.5rem] md:text-[3rem] font-bold leading-tight mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          A Confluence of business & cultures
        </h1>
      </div>
      
      {/* Right column - Description */}
      <div className="md:w-1/2 w-full p-[5%] bg-gray-50 flex flex-col justify-center">
        <p 
          className="text-[1rem] md:text-[1.1rem] mb-5 leading-relaxed"
          style={{ fontFamily: "BrandingRegular" }}
        >
          If business is on the cards, all roads, lead to the Bombay Exhibition Center. Founded in 1991, the BEC reflects Belief and Opportunity. Bringing over millions of ideas to life, the Center has helped the globe converge in Mumbai with a common purpose.
        </p>
        <p 
          className="text-[1rem] md:text-[1.1rem] leading-relaxed mb-5"
          style={{ fontFamily: "BrandingRegular" }}
        >
          As a space of limitless possibility, the BEC is endlessly customisable. With robust infrastructure, the center paces itself to global standards. The wide options of venues, the versatility packed within, are topped with helpful services.
        </p>
        <p 
          className="text-[1rem] md:text-[1.1rem] leading-relaxed"
          style={{ fontFamily: "BrandingRegular" }}
        >
          The BEC has attained historical status in Mumbai as the ideal location for exhibitions, MICE, trade shows, business displays, events and entertainment.
        </p>
      </div>
    </section>
  );
}

export default BecDescription;