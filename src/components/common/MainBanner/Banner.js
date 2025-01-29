"use client";
import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner({ SliderData }) {
  const [currentImage, setCurrentImage] = useState(0);
  // const [isVisible, setIsVisible] = useState(true);
  // const elementRef = useRef(null);

  // useEffect(() => {
  //   if (elementRef.current) {
  //     const calculatedHeight = elementRef.current.scrollHeight;

  //     // if (calculatedHeight > 660) {
  //     //   setIsVisible(false);
  //     // }
  //   }
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % SliderData.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [SliderData]);

  return (
    <div className="w-full mb-16 h-[100vh] relative banner-section">
      <div className="flex justify-center w-full overflow-hidden h-[100vh] relative">
        <div
          className=" top-0 left-0 py-6 md:px-16 px-8  w-full h-[100vh] z-10 "
          style={{
            background: "black",

            opacity: ".4",
          }}
        ></div>
        {SliderData.map((data, index) => (
          <img
            key={index}
            src={data.image.src}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2s] ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
