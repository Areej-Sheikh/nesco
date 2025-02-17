"use client";
import React from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import CareerBanner from "./careerBanner";
import CareerPassion from "./careerPassion";
import CareerCulture from "./CareerCulture";
import CareerCommitment from "./careerCommitment";
import CareerTeam from "./CareerTeam";
import CareerVoice from "./careerVoice";
import CareerJoin from "./careerJoin";

function MainCareers() {
  const Children = [
    {
      comp: <CareerBanner />,
      classCss: "section",
    },
    {
      comp: <CareerPassion />,
      classCss: "section header_color_black pt-0 lg:pt-10",
    },
    {
      comp: <CareerCulture />,
      classCss: "section",
    },
    {
      comp: <CareerCommitment />,
      classCss: "section",
    },
    {
      comp: <CareerTeam />,
      classCss: "section",
    },
    {
      comp: <CareerVoice />,
      classCss: "section",
    },
    {
      comp: <CareerJoin />,
      classCss: "section",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainCareers;
