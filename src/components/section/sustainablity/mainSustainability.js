"use client";
import React from "react";
import SustainabilityFeatures from "./sustainabilityFeatures";
import SustainablityText from "./sustainablityText";
import SustainabilityTerms from "./sustainabilityTerms";
import SustainabilityIssues from "./sustainabilityIssues";
import SustainabilityGovernance from "./sustainabilityGovernance";
import SustainabilityPerformance from "./sustainabilityPerformance";
import SustainabilityPractices from "./sustainabilityPractices";
import SustainabilityImage from "./sustainabilityImage";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import SustainabilityBanner from "./sustainabilityBanner";
import SustainablityStrategy from "./sustainablityStrategy";
function MainSustainability() {
  const Children = [
    {
      comp: <SustainabilityBanner />,
      classCss: "section",
    },
    {
      comp: <SustainabilityFeatures />,
      classCss: "section header_purple",
    },
    {
      comp: <SustainablityText />,
      classCss: "section header_purple",
    },
    {
      comp: <SustainabilityTerms />,
      classCss: "header_purple",
    },
    {
      comp: <SustainablityStrategy />,
      classCss: "header_purple",
    },
    {
      comp: <SustainabilityIssues />,
      classCss: "header_purple",
    },
    {
      comp: <SustainabilityGovernance />,
      classCss: "header_purple",
    },
    {
      comp: <SustainabilityPerformance />,
      classCss: "header_purple",
    },
    {
      comp: <SustainabilityPractices />,
      classCss: "header_purple",
    },
    {
      comp: <SustainabilityImage />,
      classCss: "header_purple",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainSustainability;
