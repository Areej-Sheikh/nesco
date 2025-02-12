"use client";
import React, { useState } from "react";

function FinancialResult() {
  const visibleCheckboxes = 10;
  const [selectedYears, setSelectedYears] = useState([]);

  const allYears = Array.from({ length: 10 }, (_, i) => {
    const startYear = 2025 - i;
    const endYear = startYear + 1;
    return `${startYear}-${endYear.toString().slice(-2)}`;
  });

  const handleYearChange = (year) => {
    setSelectedYears((prevSelected) =>
      prevSelected.includes(year)
        ? prevSelected.filter((y) => y !== year)
        : [...prevSelected, year]
    );
  };

  // const financialData = Array.from({ length: 10 }, (_, i) => ({
  //   year: allYears[i],
  //   title: `Financial Statements of Subsidiaries ${allYears[i]}`,
  // }));

  return (
    <div>
      <div className="flex justify-center  mt-16 mb-10">
        <div className="flex items-end flex-col border-2 md:w-[80%] w-[90%] lg:px-12 px-6">
          <div className="w-full flex md:flex-row flex-col justify-between items-center z-50 gap-6 lg:w-[80%] transform md:-translate-y-1/2">
            <div className=" bg-blue-600 px-4  py-2 text-center font-branding-semibold text-xl text-white">
              Financial Results
            </div>

            <div className=" bg-cyan-500 px-4  py-2 text-center font-branding-semibold text-xl text-white">
              Annual Reports
            </div>

            <div className=" bg-purple-700 px-4  py-2 text-center font-branding-semibold text-xl text-white">
              Subsidiary Accounts
            </div>
          </div>

          <div className=" my-12 flex md:flex-row flex-col justify-between w-full">
            <div className=" p-4 py-6 flex flex-col items-center md:items-start lg:w-[20%] md:w-[30%] gap-2">
              <p className="text-xl">FILTERS</p>
              <p className="mt-2 mb-2 ">Select All</p>
              {/* {Array(15)
                .fill("Default Checkbox")
                .map((label, index) => (
                  <div
                    className="flex items-center mb-2 font-branding-medium"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-500">
                      {label}
                    </label>
                  </div>
                ))} */}
              <div className="mt-2 mb-2">
                {allYears.slice(0, visibleCheckboxes).map((year, index) => (
                  <div key={index} className="my-1">
                    <label className="flex items-center gap-2 text-gray-500">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                        checked={selectedYears.includes(year)}
                        onChange={() => handleYearChange(year)}
                      />
                      {year}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-2 mb-2">
                <p className="mb-2 ">QUARTER</p>
                <div className="flex flex-col gap-1">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 text-gray-500"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                      />
                      Q{index + 1}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-[80%] col-span-3 h-full">
              <table className="table-auto border-separate text-left w-full">
                <thead>
                  <tr>
                    <th className=" bg-violet-700 text-gray-200 shadow-sm pl-8 py-3 ">
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array(10)
                    .fill("Financial Statements of Subsidiaries 2023-24")
                    .map((row, index) => (
                      <tr key={index}>
                        <td className="shadow-md font-branding-medium text-gray-500 py-3 px-8">
                          {row}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialResult;
