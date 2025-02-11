import React from "react";
import StockBanner from "./stockBanner";
import Shares from "./shares";
import Chart1 from "./Chart1";
import Quote from "./Quote";

function MainStock() {
  return (
    <section>
      <StockBanner />
      <Shares />
      <Chart1 />
      <Quote />
    </section>
  );
}

export default MainStock;
