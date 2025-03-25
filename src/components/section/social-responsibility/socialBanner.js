"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/social/43.png";
import Navbar from "@/components/layout/navbar/Navbar";
function SocialBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = () => {
    setActiveSlide(1);
  };

  const SliderData = [
    {
      image: bannerImage,
      data: (
        <div className="absolute md:top-[70%] top-[60%] right-0 px-20 py-6 bg-[#21409A] bg-opacity-50 text-white z-20">
          <p>A smile can speak volumes.</p>
          <p>It can also brighten up the future.</p>
        </div>
      ),
    },
  ];

  const filter = "filter grayscale contrast-125";

  return (
    <div className="w-full">
      {/* <Navbar activeSlide={activeSlide} /> */}
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner
        SliderData={SliderData}
        onSlideChange={handleSlideChange}
        filter={filter}
      />
    </div>
  );
}

export default SocialBanner;
