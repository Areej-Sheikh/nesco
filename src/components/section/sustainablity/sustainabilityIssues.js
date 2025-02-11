import React from "react";
import singleDanger from "@/assests/sustainability/singleDanger.png";
import doubleDanger from "@/assests/sustainability/doubleDanger.png";
import Image from "next/image";

function SustainabilityIssues() {
  return (
    <>
      <div className=" mt-30 mb-10 md:px-32 px-12 py-12 bg-[#b6d6ef] w-screen text-center overflow-x-auto">
        <h1 className="text-3xl font-bold mb-10">Material ESG Issues</h1>
        <table className=" border-2 border-gray-400 lg:text-[21px] md:text-lg sm:text-xsm text-[12px] text-left">
          <thead>
            <tr className="bg-violet-900 text-[#b6d6ef] md:text-[22px] md:text-lg sm:text-md text-center">
              <th scope="col" className="w-[15%] h-[20%]"></th>
              <th scope="col" className="py-1 px-2">
                Environmental
              </th>
              <th scope="col">Social</th>
              <th scope="col">Governance</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-2 border-gray-400">
              <td className=" text-center flex flex-col items-center justify-center">
                <div className="overflow-hidden w-[50%] pt-5">
                  <Image src={doubleDanger} className="scale-[15]" />
                </div>
                <span className="font-bold text-gray-800">High</span>
              </td>

              <td className=" border-2 border-gray-400 md:p-3">
                <ul className="list-disc md:pl-5 pl-4">
                  <li className="md:pb-3">Energy & Emission</li>
                  <li className="md:pb-3">Water & Waste</li>
                  <li>Green Buildings</li>
                </ul>
              </td>
              <td className=" border-2 border-gray-400 p-3">
                <ul className="list-disc md:pl-5 pl-4">
                  <li className="md:pb-3">Customer Centricity</li>
                  <li className="md:pb-3"> Health, Safety & Well being</li>
                  <li>Operational excellence & innovation</li>
                </ul>
              </td>
              <td className=" border-2 border-gray-400 md:p-3">
                <ul className="list-disc pl-5">
                  <li className="md:pb-3">Ethics and Governance</li>
                  <li> Risk Managemen</li>
                </ul>
              </td>
            </tr>

            <tr className=" border-2 border-gray-400">
              <td className="md:p-4 text-center flex flex-col items-center justify-center">
                <div className="overflow-hidden w-[50%] pt-5 pb-2">
                  <Image src={singleDanger} className="scale-[5]" />
                </div>
                <span className="font-bold text-gray-800">Medium High</span>
              </td>
              <td className=" border-2 border-gray-400"></td>
              <td className=" border-2 border-gray-400 p-3">
                <ul className="list-disc md:pl-5 pl-4">
                  <li className="md:pb-3">Sustainable Supply Chain</li>
                  <li className="md:pb-3">
                    {" "}
                    Human Capital Management Employees & Contractual Workforce
                  </li>
                  <li> Societal Impact</li>
                </ul>
              </td>
              <td className=" border-2 border-gray-400 p-3">
                <ul className="list-disc md:pl-5 pl-4">
                  <li className="md:pb-3">Human Rights</li>
                  <li> Compliance</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SustainabilityIssues;
