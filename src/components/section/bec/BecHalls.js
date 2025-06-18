import React from "react";
import Image from "next/image";

// Import hall images
import exhibitionImg from "@/assests/nesco-business-page/bec-elements/33.jpg";
import celebrationImg from "@/assests/nesco-business-page/bec-elements/34.jpg";
import miceImg from "@/assests/nesco-business-page/bec-elements/35.jpg";

function BecHalls() {
  const halls = [
    {
      title: "Exhibitions",
      image: exhibitionImg,
      alt: "Exhibition halls at BEC",
    },
    {
      title: "Celebration Halls",
      image: celebrationImg,
      alt: "Celebration venues at BEC",
    },
    {
      title: "MICE Halls",
      image: miceImg,
      alt: "MICE facilities at BEC",
    },
  ];

  return (
    <section className="w-full h-auto min-h-screen bg-white flex flex-col overflow-hidden">
      {/* Keep significant top padding to maintain position */}
      <div className="w-full pt-24 sm:pt-32 md:pt-40 px-[5%] flex flex-col h-full">
        {/* Optional header or title area */}
        <div className="mb-4 sm:mb-8">
          {/* You could add a title here if needed */}
        </div>
        
        {/* Halls layout with TALLER images */}
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-6 sm:gap-8 flex-1">
          {halls.map((hall, index) => (
            <div 
              key={index} 
              className="flex-1 flex flex-col h-[65vh] sm:h-[70vh] md:h-[75vh]"
            >
              {/* Image container with INCREASED height */}
              <div className="relative flex-1 w-full overflow-hidden rounded-md">
                <Image
                  src={hall.image}
                  alt={hall.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
                />
              </div>

              {/* Title below image */}
              <p
                className="text-center w-full py-3 sm:py-4 italic text-[#2c3e50] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]"
                style={{ fontFamily: "TimesNewRoman" }}
              >
                {hall.title}
              </p>
            </div>
          ))}
        </div>
        
        {/* Reduced bottom padding to allow more space for taller images */}
        <div className="pb-4 sm:pb-8"></div>
      </div>
    </section>
  );
}

export default BecHalls;