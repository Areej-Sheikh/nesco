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
    <section className="w-full h-screen bg-white flex flex-col overflow-hidden">
      {/* Title */}
      <div className="w-full py-8 px-[5%] flex justify-center items-center">
        {/* <h2
          className="text-[#2c3e50] text-[1.8rem] md:text-[2rem] italic"
          style={{ fontFamily: "TimesNewRoman" }}
        >
          Exhibition Spaces
        </h2> */}
      </div>

      {/* Halls Grid - Keep original gap and layout */}
      <div className="w-full flex-1 px-[5%] grid grid-cols-1 md:grid-cols-3 gap-4">
        {halls.map((hall, index) => (
          <div key={index} className="flex flex-col h-[90%]">
            {/* Image container with original relative sizing */}
            <div className="relative w-full flex-1 overflow-hidden">
              <Image
                src={hall.image}
                alt={hall.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Title below image - no background color */}
            <p
              className="text-center w-full py-4 italic text-[#2c3e50]"
              style={{ fontFamily: "TimesNewRoman" }}
            >
              {hall.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BecHalls;