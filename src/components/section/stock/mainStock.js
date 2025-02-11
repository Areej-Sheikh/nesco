import React from "react";
import StockBanner from "./stockBanner";
import Shares from "./shares";
import Chart1 from "./Chart1";
import Quote from "./Quote";
import Pagewrapper from "@/components/layout/pagewrapper";

function MainStock() {
  return (
    <Pagewrapper>
      <StockBanner />
      <Shares />
      <Chart1 />
      <Quote />
    </Pagewrapper>
  );
}

export default MainStock;
