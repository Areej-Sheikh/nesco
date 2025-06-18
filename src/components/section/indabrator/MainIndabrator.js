"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

// Import all Indabrator components
import IndabratorHero from "./IndabratorHero";
import IndabratorIntro from "./IndabratorIntro";
import IndabratorServices from "./IndabratorServices";
import IndabratorUnits from "./IndabratorUnits";
import IndabratorStats from "./IndabratorStats";
import IndabratorProfile from "./IndabratorProfile";
import IndabratorEnquiries from "./IndabratorEnquiries";
import IndabratorDisplay from "./IndrabratorDisplay";

function MainIndabrator() {
  const [activeSlide, setActiveSlide] = useState(0);

  const Children = [
    {
      comp: <IndabratorHero />,
      classCss: "section",
    },
    {
      comp: <IndabratorIntro />,
      classCss: "section",
    },
    {
      comp: <IndabratorServices />,
      classCss: "section",
    },
    {
        comp: <IndabratorDisplay />,
        classCss: "section",
    },
    {
      comp: <IndabratorUnits />,
      classCss: "section",
    },
    {
      comp: <IndabratorStats />,
      classCss: "section",
    },
    {
      comp: <IndabratorProfile />,
      classCss: "section",
    },
    {
      comp: <IndabratorEnquiries />,
      classCss: "section",
    },
  ];

  return (
    <Pagewrapper activeSlide={activeSlide} className="overflow-x-hidden">
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainIndabrator;