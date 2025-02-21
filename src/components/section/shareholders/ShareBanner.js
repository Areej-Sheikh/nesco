"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/shareHolder/banner.jpg";
// import sebiImage from "@/assests/sebi/image.png";
import Navbar from "@/components/layout/navbar/Navbar";
function ShareBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const filter = "filter grayscale contrast-125";

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="absolute md:left-0 md:bottom-20 py-6 px-20 z-20">
          <div className="innerContainer flex flex-col gap-3">
            <p className="text-white sm:text-xl md:text-4xl lg:text-6xl font-branding-medium">
              Shareholders
            </p>
            <p className="sm:text-xl md:text-4xl lg:text-6xl font-branding-medium text-[#45B7E2]">
              Services
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Navbar activeSlide={activeSlide} />
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
        filter={filter}
      />
    </div>
  );
}

export default ShareBanner;
