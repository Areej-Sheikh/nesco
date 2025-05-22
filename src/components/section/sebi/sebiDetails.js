import { apiUrls } from "@/apis";
import useGetQuery from "@/hooks/getQuery.hook";
import React, { useEffect, useMemo, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import {
  AgmProceeding,
  Amalgamation,
  AnnualReport,
  AnnualResult,
  CorporateReport,
  Criteria,
  Details,
  FinancialStatement,
  InvestorReport,
  Memorandum,
  NewsAd,
  NoticeBoard,
  PolicyAndCode,
  PolicyAndCodeBRSR,
  SCHEDULE,
  Secretarial,
  ShareHoldingPattern,
  SrutinizerReport,
  TermsAndCondition,
  VotingResult,
} from "./sebiFile";

function SebiDetails() {
  const { getQuery } = useGetQuery();
  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentTitle, setCurrentTitle] = useState();

  useEffect(() => {
    setLoading(true);
    getQuery({
      url: `${apiUrls?.sebi}`,
      onSuccess: (res) => {
        setGetData(res?.data || []);
        setTimeout(() => setLoading(false), 2000);
      },
      onFail: (err) => {
        console.error("Failed to fetch announcements data:", err);
      },
    });
  }, []);

  const transformedData = useMemo(() => {
    if (!Array.isArray(getData)) return [];

    return getData.map((item) => {
      // Handle address tables if they exist
      if (Array.isArray(item.addressTables) && item.addressTables.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "addressTables",
          tables: item.addressTables.map((table) => ({
            tableAddressTitle: table.tableAddressTitle,
            fields: table.fields.map((field) => ({
              type: field.type,
              data: {
                cin: field.data?.cin || "",
                email: field.data?.email || "",
                fax: field.data?.fax || "",
                full_address: field.data?.full_address || "",
                name: field.data?.name || "",
                phone: field.data?.phone || "",
                position: field.data?.position || "",
                tel: field.data?.tel || "",
              },
              _id: field._id,
            })),
            _id: table._id,
          })),
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      }

      if (Array.isArray(item.documentLink) && item.documentLink.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "documentLink",
          tables: item.documentLink.map((table) => ({
            DocumentName: table.DocumentName,
            link: table.link,
          })),
        };
      }
      if (Array.isArray(item.documentPdf) && item.documentPdf.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "documentPdf",
          tables: item.documentPdf.map((table) => ({
            DocumentPdfName: table.DocumentPdfName,
            documentPdfFile: table.documentPdfFile,
          })),
        };
      }
      if (Array.isArray(item.positionTable) && item.positionTable.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "positionTable",
          tables: item.positionTable.map((table) => ({
            tablePositionTitle: table.tablePositionTitle,
            fields: table.fields.map((field) => ({
              name1: field.name1,
              position: field.position,
            })),
          })),
        };
      }
      if (Array.isArray(item.documentAll) && item.documentAll.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "documentAll",
          tables: item.documentAll.map((table) => ({
            year: table.year,
            fields: table.documentfields.map((field) => ({
              _id: field._id,
              documentDate: field.documentDate,
              documentFile: field.documentFile,
              documentName: field.documentName,
            })),
          })),
        };
      }
      if (Array.isArray(item.pdfTables) && item.pdfTables.length > 0) {
        return {
          _id: item._id,
          title: item.title,
          option: "pdfTables",
          tables: item.pdfTables.map((table) => ({
            year: table.pdfYear,
            fields: table.fields.map((field) => ({
              _id: field._id,
              quater: field.quater,
              pdfDate: field.pdfDate,
              pdfFile: field.pdfFile,
              pdfName: field.pdfName,
            })),
          })),
        };
      }

      // Default return for items without any table data
      return {
        _id: item._id,
        title: item.title,
        option: null,
        tables: [],
      };
    });
  }, [getData]);

  useEffect(() => {
    if (openIndex !== null) {
      setCurrentTitle(transformedData[openIndex]?.title);
    }
  }, [openIndex, transformedData]);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const renderTableContent = (item) => {
    switch (item.option) {
      case "addressTables":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3F3F3]">
            {item.tables.map((table, tableIndex) => (
              <div key={tableIndex} className="p-4 ">
                <div className="">
                  <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6]">
                    {table.tableAddressTitle}
                  </h4>
                  <div className="">
                    {table.fields.map((field, fieldIndex) => (
                      <div key={fieldIndex} className="border p-3 rounded">
                        <p className="font-branding-bold">{field.data.name}</p>
                        <p>{field.data.position}</p>
                        <p>{field.data.full_address.split(",")}</p>
                        {field.data?.email && (
                          <a href={`mailto:${field.data.email}`} className="">
                            Email:{" "}
                            <span className="underline hover:text-blue-500">
                              {field.data.email}
                            </span>
                          </a>
                        )}
                        {field.data?.phone && <p>Phone: {field.data.phone}</p>}
                        {field.data?.tel && <p>Tel: {field.data.tel}</p>}
                        {field.data?.cin && <p>CIN: {field.data.cin}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "documentLink":
        return (
          <ul className="p-5 bg-[#F3F3F3] w-full grid grid-cols-2 gap-5">
            {item.tables.map((doc, docIndex) => (
              <li key={docIndex} className="">
                <p className="w-full overflow-hidden flex">
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" px-6 py-2 border-[#CCCCCC] border underline w-full hover:text-blue-400"
                  >
                    {doc.DocumentName}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        );

      case "documentPdf":
        return (
          <div className="bg-[#F3F3F3] gap-4">
            {item.title ===
            "TERMS AND CONDITIONS OF APPOINTMENT OF INDEPENDENT DIRECTORS OF THE COMPANY"
              ? TermsAndCondition().map((data, index) => (
                  <div key={index} className="border p-3 rounded">
                    <p className="flex items-center text-left gap-1">
                      <FaRegFilePdf className="text-red-500 w-10" />
                      <a
                        href={data.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {data.fileName}
                      </a>
                    </p>
                  </div>
                ))
              : item.title === "Policies & Codes"
              ? PolicyAndCode().map((data, index) => (
                  <div key={index} className="border p-3 rounded">
                    <p className="flex items-center text-left gap-1">
                      <FaRegFilePdf className="text-red-500 w-10" />
                      <a
                        href={data.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {data.fileName}
                      </a>
                    </p>
                  </div>
                ))
              : item.title === "POLICIES ON BRSR"
              ? PolicyAndCodeBRSR().map((data, index) => (
                  <div key={index} className="border p-3 rounded">
                    <p className="flex items-center text-left gap-1">
                      <FaRegFilePdf className="text-red-500 w-10" />
                      <a
                        href={data.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {data.fileName}
                      </a>
                    </p>
                  </div>
                ))
              : item.title ===
                "CRITERIA OF MAKING PAYMENTS TO NON-EXECUTIVE DIRECTORS OF THE COMPANY"
              ? Criteria().map((data, index) => (
                  <div key={index} className="border p-3 rounded">
                    <p className="flex items-center text-left gap-1">
                      <FaRegFilePdf className="text-red-500 w-10" />
                      <a
                        href={data.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {data.fileName}
                      </a>
                    </p>
                  </div>
                ))
              : item.title ===
                "DETAILS OF DIRECTORS' FAMILIARISATION PROGRAMMES OF THE COMPANY"
              ? Details().map((data, index) => (
                  <div key={index} className="border p-3 rounded">
                    <p className="flex items-center text-left gap-1">
                      <FaRegFilePdf className="text-red-500 w-10" />
                      <a
                        href={data.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {data.fileName}
                      </a>
                    </p>
                  </div>
                ))
              : item.title === "MEMORANDUM AND ARTICLES OF ASSOCIATION"
              ? Memorandum().map((data, index) => (
                  <div key={index} className="border p-3 rounded">
                    <p className="flex items-center text-left gap-1">
                      <FaRegFilePdf className="text-red-500 w-10" />
                      <a
                        href={data.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {data.fileName}
                      </a>
                    </p>
                  </div>
                ))
              : item.title === "AMALGAMATION"
              ? Amalgamation().map((data, index) => (
                  <div key={index} className="border p-3 rounded">
                    <p className="flex items-center text-left gap-1">
                      <FaRegFilePdf className="text-red-500 w-10" />
                      <a
                        href={data.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {data.fileName}
                      </a>
                    </p>
                  </div>
                ))
              : item.tables.map((doc, docIndex) => (
                  <div key={docIndex} className="border p-3 rounded">
                    <p className="flex items-center text-left gap-1">
                      <FaRegFilePdf className="text-red-500 w-10" />
                      <a
                        href={doc.documentPdfFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {doc.DocumentPdfName}
                      </a>
                    </p>
                  </div>
                ))}
          </div>
        );

      case "positionTable":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3F3F3]">
            {item.tables.map((table, tableIndex) => (
              <div key={tableIndex} className="p-4 w-full bg-[#F3F3F3]">
                <div>
                  <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6]">
                    {table.tablePositionTitle}
                  </h4>
                  <table className="w-full border-collapse">
                    <tbody>
                      {table.fields.map((field, fieldIndex) => (
                        <tr key={fieldIndex}>
                          <td className="border p-2">{field.name1}</td>
                          <td className="border p-2">{field.position}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        );

      case "documentAll":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3F3F3]">
            {item.tables.map((table, tableIndex) => (
              <div key={tableIndex} className="p-4">
                {item.title !== "ANNUAL REPORTS OF THE COMPANY" && (
                  <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6]">
                    {table.year}
                  </h4>
                )}
                <div className="">
                  {table.fields.map((field, fieldIndex) => {
                    // Format the date
                    // console.log(table.fields);
                    const formatDate = (dateString) => {
                      const date = new Date(dateString);
                      const day = date.getDate();
                      const month = date.toLocaleString("default", {
                        month: "short",
                      });
                      const year = date.getFullYear();
                      return `${day} ${month} ${year}`;
                    };

                    return (
                      <div
                        key={fieldIndex}
                        className=" px-4 py-2 rounded w-full"
                      >
                        {item.title === "ANNUAL REPORTS OF THE COMPANY" ? (
                          AnnualReport()
                            .reduce((acc, data) => {
                              const existingYear = acc.find(
                                (item) => item.year === data.year
                              );
                              if (existingYear) {
                                existingYear.files.push(data);
                              } else {
                                acc.push({ year: data.year, files: [data] });
                              }
                              return acc;
                            }, [])
                            .map((group, groupIndex) => (
                              <div key={groupIndex}>
                                <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6] my-4">
                                  {group.year}
                                </h4>
                                {group.files.map((file, fileIndex) => (
                                  <div key={fileIndex} className="w-[100%] ">
                                    <p className="flex items-center">
                                      <span className="h-full w-fit">
                                        <FaRegFilePdf className="text-red-500 w-10" />
                                      </span>
                                      <a
                                        href={file.filePath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-500 underline inline-block w-full"
                                      >
                                        {file.fileName}
                                      </a>
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ))
                        ) : (
                          <>
                            {field.documentDate && (
                              <div className="font-branding-bold ml-5 my-2">
                                <p>{formatDate(field.documentDate)}</p>
                              </div>
                            )}
                            <div className="w-[100%]">
                              <p className="flex items-center">
                                <span className="h-full w-fit">
                                  <FaRegFilePdf className="text-red-500 w-10" />
                                </span>

                                {item.title ===
                                "NEWSPAPER ADVERTISEMENTS PURSUANT TO REGULATION 47(1) OF SEBI (LODR) REGULATIONS, 2015" ? (
                                  NewsAd().map((data) => (
                                    <>
                                      {data.fileName === field._id && (
                                        <a
                                          href={data.filePath}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:text-blue-500 underline inline-block w-full"
                                        >
                                          {field.documentName}
                                        </a>
                                      )}
                                    </>
                                  ))
                                ) : item.title ===
                                  "FINANCIAL STATEMENTS OF SUBSIDIARY OF THE COMPANY" ? (
                                  FinancialStatement().map((data) => (
                                    <>
                                      {data.fileName === field._id && (
                                        <a
                                          href={data.filePath}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:text-blue-500 underline inline-block w-full"
                                        >
                                          {field.documentName}
                                        </a>
                                      )}
                                    </>
                                  ))
                                ) : item.title ===
                                  "SECRETARIAL COMPLIANCE REPORT" ? (
                                  Secretarial().map((data) => (
                                    <>
                                      {data.fileName === field.documentName && (
                                        <a
                                          href={data.filePath}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:text-blue-500 underline inline-block w-full"
                                        >
                                          {field.documentName}
                                        </a>
                                      )}
                                    </>
                                  ))
                                ) : item.title === "VOTING RESULTS" ? (
                                  VotingResult().map((data) => (
                                    <>
                                      {data.fileName === field.documentName && (
                                        <a
                                          href={data.filePath}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:text-blue-500 underline inline-block w-full"
                                        >
                                          {field.documentName}
                                        </a>
                                      )}
                                    </>
                                  ))
                                ) : item.title === "SRUTINIZER’S REPORT" ? (
                                  SrutinizerReport().map((data) => (
                                    <>
                                      {data.fileName === field.documentName && (
                                        <a
                                          href={data.filePath}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:text-blue-500 underline inline-block w-full"
                                        >
                                          {field.documentName}
                                        </a>
                                      )}
                                    </>
                                  ))
                                ) : item.title === "AGM PROCEEDINGS" ? (
                                  AgmProceeding().map((data) => (
                                    <>
                                      {data.fileName === field.documentName && (
                                        <a
                                          href={data.filePath}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:text-blue-500 underline inline-block w-full"
                                        >
                                          {field.documentName}
                                        </a>
                                      )}
                                    </>
                                  ))
                                ) : item.title ===
                                  "SCHEDULE OF AND PRESENTATIONS MADE TO ANALYSTS OR INSTITUTIONAL INVESTORS" ? (
                                  SCHEDULE().map((data) => (
                                    <>
                                      {data.fileName === field.documentName && (
                                        <a
                                          href={data.filePath}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:text-blue-500 underline inline-block w-full"
                                        >
                                          {data.fileName}
                                        </a>
                                      )}
                                    </>
                                  ))
                                ) : (
                                  <a
                                    href={field.documentFile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500 underline inline-block w-full"
                                  >
                                    {field.documentName}
                                  </a>
                                )}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );

      case "pdfTables":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3F3F3]">
            {item.tables.map((table, tableIndex) => (
              <div key={tableIndex} className="p-4">
                <h4 className="font-branding-bold py-2 px-6 bg-[#D6D6D6]">
                  {table.year}
                </h4>
                <div className="">
                  {table.fields.map((field, fieldIndex) => {
                    // Format the date
                    const formatDate = (dateString) => {
                      const date = new Date(dateString);
                      const day = date.getDate();
                      const month = date.toLocaleString("default", {
                        month: "short",
                      });
                      const year = date.getFullYear();
                      return `${day} ${month} ${year}`;
                    };

                    return (
                      <div
                        key={fieldIndex}
                        className="border px-4 py-2 rounded flex w-full"
                      >
                        <div className="w-[30%]">
                          {field.pdfDate ? (
                            <p>{formatDate(field.pdfDate)}</p>
                          ) : (
                            <p>{field.quater}</p>
                          )}
                        </div>
                        <div className="w-[70%] ">
                          <p className="flex items-center">
                            <span className="h-full w-fit">
                              <FaRegFilePdf className="text-red-500 w-10" />
                            </span>
                            {item.title === "Investor Grievances Reports" ? (
                              InvestorReport().map(
                                (data) =>
                                  data.fileName === field._id && (
                                    <a
                                      href={data.filePath}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-blue-500 underline inline-block w-full"
                                    >
                                      {field.pdfName}
                                    </a>
                                  )
                              )
                            ) : item.title ===
                              "Corporate Governance Reports" ? (
                              CorporateReport().map(
                                (data) =>
                                  data.fileName === field._id && (
                                    <a
                                      href={data.filePath}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-blue-500 underline inline-block w-full"
                                    >
                                      {field.pdfName}
                                    </a>
                                  )
                              )
                            ) : item.title ===
                              "SHAREHOLDING PATTERN OF THE COMPANY" ? (
                              ShareHoldingPattern().map(
                                (data) =>
                                  data.fileName === field._id && (
                                    <a
                                      href={data.filePath}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-blue-500 underline inline-block w-full"
                                    >
                                      {field.pdfName}
                                    </a>
                                  )
                              )
                            ) : item.title ===
                              "QUARTERLY / ANNUAL FINANCIAL RESULTS OF THE COMPANY" ? (
                              AnnualResult().map(
                                (data) =>
                                  data.fileName === field._id && (
                                    <a
                                      href={data.filePath}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-blue-500 underline inline-block w-full"
                                    >
                                      {field.pdfName}
                                    </a>
                                  )
                              )
                            ) : item.title ===
                              "NOTICES OF BOARD AND SHAREHOLDERS MEETINGS" ? (
                              NoticeBoard().map(
                                (data) =>
                                  data.fileName === field._id && (
                                    <a
                                      href={data.filePath}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-blue-500 underline inline-block w-full"
                                    >
                                      {field.pdfName}
                                    </a>
                                  )
                              )
                            ) : (
                              <a
                                href={field.pdfFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 underline inline-block w-full"
                              >
                                {field.pdfName}
                              </a>
                            )}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return <p className="text-gray-500">No data available</p>;
    }
  };

  return (
    <div className="flex justify-center h-fit">
      {loading ? (
        "Loading...."
      ) : (
        <div className=" lg:w-[80%] w-[90%]  mt-0">
          {transformedData.map((item, index) => (
            <div key={item._id || index} className="mb-3">
              <div
                className="border-2 border-gray-300 px-4 py-2 font-bold flex justify-between mb-0 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <p className="text-gray-600 font-branding-semibold w-[95%]">
                  {item.title}
                </p>
                <p className="text-blue-800 overflow-hidden p-0 h-6 flex justify-center items-center w-[5%]">
                  <span
                    className={`transition-transform duration-300 font-bold text-3xl inline-block ${
                      openIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </p>
              </div>
              <div
                className={`font-bold transition-all duration-700 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "opacity-100 max-h-[5000px]"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="border-2 border-gray-300 border-t-0 w-full">
                  {renderTableContent(item)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SebiDetails;
