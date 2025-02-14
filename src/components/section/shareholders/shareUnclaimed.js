import React from "react";
import { FaArrowDown } from "react-icons/fa";

function ShareUnclaimed() {
  return (
    <div className="dividendDiv bg-gray-300 flex justify-center items-center flex-col gap-5 md:gap-10 py-10">
      <div className="flex flex-col items-center w-[90%]">
        <p className="font-branding-semibold text-4xl sm:text-3xl text-blue-800 my-6 justify-center text-center">
          Unclaimed Dividends
        </p>

        <p className="justify-center text-justify text-2xl sm:text-xl font-branding-medium">
          Pursuant to Sections 124(5) of the Companies Act, 2013, read with
          rules framed there under, the Company is required to transfer the
          amount of dividend remained unpaid/unclaimed for a period of seven
          years from the date of transfer to the Investor Education and
          Protection Fund (IEPF).
        </p>
      </div>
      <div className="tableDiv w-[90%]">
        <div className="overflow-x-auto">
          <table className="table-auto border-separate bg-white m-auto text-center border border-gray-300">
            <thead>
              <tr>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  FINANCIAL YEAR
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  DIVIDEND %
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  UNCLAIMED DIVIDEND <br />
                  <span className="text-xs">(AMOUNT IN RS.)</span>
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  LAST DATE FOR CLAIMING <br />
                  <span className="text-xs">UNPAID DIVIDEND</span>
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  DUE DATE FOR TRANSFER TO IEPF
                </th>
                <th className="bg-blue-800 text-gray-200 px-4 py-2 text-sm sm:text-xs">
                  SHAREHOLDER WISE DETAILS
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  year: "2015-16",
                  dividend: "10",
                  unclaimed: "40000",
                  lastDate: "25-01-2027",
                  dueDate: "25-01-2030",
                },
                {
                  year: "2016-17",
                  dividend: "12",
                  unclaimed: "50000",
                  lastDate: "10-02-2028",
                  dueDate: "10-02-2031",
                },
              ].map((data, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="px-4 py-2 text-sm sm:text-xs">{data.year}</td>
                  <td className="px-4 py-2 text-sm sm:text-xs">
                    {data.dividend}
                  </td>
                  <td className="px-4 py-2 text-sm sm:text-xs">
                    {data.unclaimed}
                  </td>
                  <td className="px-4 py-2 text-sm sm:text-xs">
                    {data.lastDate}
                  </td>
                  <td className="px-4 py-2 text-sm sm:text-xs">
                    {data.dueDate}
                  </td>
                  <td className="px-4 py-2 flex justify-center items-center">
                    <div className=" flex justify-center items-center w-10 h-10 mt-3 bg-blue-500">
                      <button className=" bg-white text-blue-500 p-2 rounded-full ">
                        <FaArrowDown />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShareUnclaimed;
