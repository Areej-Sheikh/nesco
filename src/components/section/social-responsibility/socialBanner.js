"use client";
import Banner from "@/components/common/MainBanner/Banner";
import React, { useState } from "react";
import bannerImage from "@/assests/leadership/image.png";
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
        <div className="absolute top-[70%] right-0 px-20 py-6 bg-[#21409A] bg-opacity-50 text-white">
          <p>A smile can speak volumes.</p>
          <p>It can also brighten up the future.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Navbar activeSlide={activeSlide} />
      {/* <Banner SliderData={SliderData}  onSlideChange={handleSlideChange} /> */}
      <Banner SliderData={SliderData} onSlideChange={handleSlideChange} />
    </div>
  );
}

export default SocialBanner;
