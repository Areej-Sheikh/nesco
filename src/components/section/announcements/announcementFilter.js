"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

function AnnouncementFilter() {
  const [visibleCheckboxes, setVisibleCheckboxes] = useState(5);
  const [visibleRows, setVisibleRows] = useState(5);
  const [selectedYears, setSelectedYears] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const financialData = Array.from({ length: 10 }, (_, i) => ({
    year: allYears[i],
    title: `Financial Statements of Subsidiaries ${allYears[i]}`,
  }));

  const filteredData = financialData
    .filter((item) =>
      selectedYears.length > 0 ? selectedYears.includes(item.year) : true
    )
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <div>
      <div className="flex justify-center">
        <div className=" my-12 px-4 flex md:flex-row flex-col justify-between lg:w-[80%] md:w-[90%]">
          <div className="md:w-[30%] p-4 py-6 mt-2 sm:ml-3 md:ml-4 mb-2 flex flex-col">
            <div className="relative text-gray-500 flex justify-center items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-2 py-1 pl-8 border-b  border-gray-300 "
              />
              <button className="absolute left-2  w-5 h-5 text-gray-500 ">
                <IoSearch className="w-full h-full" />
              </button>
            </div>
            <p className=" mt-2 font-branding-medium text-gray-500">Filters</p>
            <p className="mt-2 mb-2 font-branding-medium text-gray-500">
              Select All
            </p>

            {allYears.slice(0, visibleCheckboxes).map((year, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                  checked={selectedYears.includes(year)}
                  onChange={() => handleYearChange(year)}
                />
                <label className="ml-2 text-sm font-medium text-gray-500">
                  {year}
                </label>
              </div>
            ))}

            {visibleCheckboxes < allYears.length ? (
              <button
                className="mt-2 text-gray-500 hover:underline  w-fit p-1  "
                onClick={() => setVisibleCheckboxes(visibleCheckboxes + 5)}
              >
                Show More Filters
              </button>
            ) : (
              <button
                className="mt-2 text-gray-500 hover:underline  w-fit p-1  "
                onClick={() => setVisibleCheckboxes(5)}
              >
                Show Less Filters
              </button>
            )}
          </div>

          <div className=" md:w-[70%] p-3 col-span-3 ">
            <table className="table-auto border-separate text-left w-full ">
              <thead>
                <tr>
                  <th className=" bg-violet-700 text-gray-200 shadow-sm pl-8 py-3 ">
                    Title
                  </th>
                  {/* <th className="title bg-violet-700 text-gray-200 shadow-sm pl-2  ">
              Title
            </th> */}
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, visibleRows).map((row, index) => (
                  <tr key={index}>
                    <td className="shadow-md pl-3 font-branding-medium text-gray-500">
                      {/* {row.year} &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  {row.title} */}
                      <div className="flex justify-between mx-4 md:pr-[8%] my-3">
                        <span className="">{row.year}</span>
                        <span className=" ">{row.title}</span>
                      </div>
                    </td>

                    {/* <td className="border-collapse border-spacing-0 shadow-sm pl-3 font-branding-medium text-gray-500">
                {row.title}
              </td> */}
                  </tr>
                ))}
              </tbody>
            </table>

            {visibleRows < 10 ? (
              <button
                className="mt-2 text-gray-500 hover: underline w-fit p-1"
                onClick={() => setVisibleRows(visibleRows + 5)}
              >
                Show More Rows
              </button>
            ) : (
              <button
                className="mt-2 text-gray-500 hover: underline w-fit p-1"
                onClick={() => setVisibleRows(5)}
              >
                Show Less Rows
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementFilter;
