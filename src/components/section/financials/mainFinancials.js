import React from "react";

import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import FinancialsBanner from "./financialsBanner";
import FinancialResult from "./financialResult";

function MainFinancials() {
  const Children = [
    {
      comp: <FinancialsBanner />,
      classCss: "",
    },
    {
      comp: <FinancialResult />,
      classCss: "",
    },
  ];
  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainFinancials;
