"use client";
import Navbar from "@/components/layout/navbar/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import sustainabilityImage from "@/assests/sustainability/frontImage.png";
import SustainabilityFeatures from "./sustainabilityFeatures";
import SustainablityText from "./sustainablityText";
import SustainabilityTerms from "./sustainabilityTerms";
import SustainabilityIssues from "./sustainabilityIssues";
import SustainabilityGovernance from "./sustainabilityGovernance";
import SustainabilityPerformance from "./sustainabilityPerformance";
import SustainabilityPractices from "./sustainabilityPractices";
import SustainabilityImage from "./sustainabilityImage";
function MainSustainability() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Image
          src={sustainabilityImage}
          alt="Sustainability Image"
          className="w-full object-cover mx-auto h-screen"
        />
      </div>
      <div className="">
        <SustainabilityFeatures />
      </div>
      <div className="">
        <SustainablityText />
      </div>
      <div className="">
        <SustainabilityTerms />
      </div>
      <div>
        <SustainabilityIssues />
      </div>
      <div>
        <SustainabilityGovernance />
      </div>
      <div>
        <SustainabilityPerformance />
      </div>
      <div>
        <SustainabilityPractices />
      </div>
      <div>
        <SustainabilityImage />
      </div>
    </>
  );
}

export default MainSustainability;
