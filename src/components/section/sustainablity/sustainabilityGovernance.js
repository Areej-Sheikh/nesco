import React from "react";

function SustainabilityGovernance() {
  return (
    <>
      <div className="lg:mx-36 md:mx-20 sm:mx-10 mx-8 text-center">
        <h1 className="text-3xl font-bold text-[#39c2ab] mb-8">
          ESG Governance Structure
        </h1>
        <p className="lg:text-[21px] md:text-[16px] text-[14px] text-justify font-medium text-black mb-8">
          Nesco’s Risk Committee of the Board ensures oversight of our
          sustainability initiatives. The committee evaluates our policies and
          practices to meet regulatory requirements and assesses the impact of
          Nesco’s operations on the environment and communities. In addition, it
          helps drive Nesco’s sustainability ambitions by identifying
          opportunities for improvements for reducing the Compa ny’s
          environmental footprint and enhancing positive socially responsible
          outcomes. In consultation with the Board, we have devel oped a robust
          policy framework and are progressively incorporating material ESG
          topics into the business and our ERM process.
        </p>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-14 lg:gap-20 md:gap-10 sm:gap-5 md:mx-0 ml-6">
          <div className="text-center bg-gray-200 pb-14 rounded-3xl  w-[90%] h-[95%]">
            <div className="py-10 bg-[#85c667] w-[122%] px-2 rounded-[65px] mb-5 relative right-7">
              <p className="text-2xl text-white">Environment</p>
            </div>
            <p className="text-justify px-8 text-[15px]">
              Nesco is committed to reducing its en vironmental impact by
              adopting renew able energy, minimizing waste, and con serving
              natural resources. We invest in green technologies, promote energy
              ef ficiency, and ensure compliance with environmental regulations
              to foster sustainability across our operations.
            </p>
          </div>
          <div className="text-center bg-gray-200 pb-14 rounded-3xl w-[90%] h-[95%]">
            <div className="py-10 bg-[#69bbef] w-[122%] px-2 rounded-[65px] mb-5 relative right-7">
              <p className="text-2xl text-white">Social</p>
            </div>
            <p className="text-justify px-8 text-[15px]">
              Nesco focuses on social responsibility by promoting fair labor
              practices, ensuring employee safety, and engaging with local
              communities. We strive to create an in clusive workplace, support
              economic growth through ethical sourcing, and de liver high levels
              of customer satisfaction.
            </p>
          </div>
          <div className="text-center  bg-gray-200 pb-14 rounded-3xl w-[90%] h-[95%]">
            <div className="py-10 bg-[#48cfde] w-[122%] px-2 rounded-[65px] mb-5 relative right-7">
              <p className="text-2xl text-white">Governance</p>
            </div>
            <p className="text-justify px-8 text-[15px]">
              Nesco adheres to strong corporate gov ernance, ensuring
              transparency, account ability, and ethical decision-making. Our
              governance framework ensures that sus tainability is integrated
              into our opera tions, with effective oversight by the Board and
              clear policies to mitigate risks and maintain stakeholder trust.
            </p>
          </div>
        </div>
        <div>
          <button className="bg-green-700 text-white p-3 mb-14 text-sm static">
            {" "}
            Refer to Section Policies on BRSR
          </button>
        </div>
      </div>
    </>
  );
}

export default SustainabilityGovernance;
