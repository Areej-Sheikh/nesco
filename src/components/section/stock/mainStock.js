import React from "react";
import StockBanner from "./stockBanner";
import Shares from "./shares";
import Chart1 from "./Chart1";
import Quote from "./Quote";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

function MainStock() {
  const Children = [
    {
      comp: <StockBanner />,
      classCss: "",
    },
    // {
    //   comp: <Shares />,
    //   classCss: "",
    // },
    // {
    //   comp: <Chart1 />,
    //   classCss: "header_purple",
    // },
    // {
    //   comp: <Quote />,
    //   classCss: "header_purple",
    // },
  ];
  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
      <Shares />
      <Chart1 />
      <Quote />
    </Pagewrapper>
  );
}

export default MainStock;
