import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";

const ContactCard = ({ title, content }) => (
  <div className="bg-white p-4  justify-start flex flex-col">
    <h3 className="text-lg p-3 bg-blue-300 text-blue-900 w-auto font-branding-medium">
      {title}
    </h3>
    <p className="bg-gray-200  whitespace-pre-line p-3 h-full w-auto text-sm md:text-md lg:text-xl font-branding-medium text-gray-700">
      {content}
    </p>
  </div>
);

const page = () => {
  const contacts = [
    {
      title: "REGISTRAR & TRANSFER AGENT",
      content: `Link Intime India Private Limited
Nesco Limited
C-101, 247 Park,
LBS Marg, Vikhroli West,
Mumbai 400083.
Phone: +91 22 4918 6270
Fax: +91 22 4098 6060
Email: rnt.helpdesk@linkintime.co.in`,
    },
    {
      title: "INVESTOR GRIEVANCES REDRESSAL",
      content: `Ms. Shalini Kamath
(Company Secretary & Compliance Officer)
NESCO Center,
Western Express Highway,
Goregaon (East), Mumbai 400063
Tel: +91 22 66450123
Mobile: 9137500282
Email: companysecretary@nesco.in`,
    },

    {
      title: "REGISTERED OFFICE ADDRESS",
      content: `NESCO Center,
Western Express Highway,
Goregaon (East),
Mumbai 400063.
Phone: +91 22 66450123
Mobile: 9137500282`,
    },
    {
      title: "KEY MANAGERIAL PERSONNEL",
      content: `Mr. Krishna S. Patel
(Chairman and Managing Director)
Email: companysecretary@nesco.in

Mr. Dipesh R. Singhania
(Chief Financial Officer)
Email: dipesh.singhania@nesco.in

Ms. Shalini Kamath
(Company Secretary & Compliance Officer)
Email: companysecretary@nesco.in`,
    },

    {
      title: "SECRETARIAL OFFICE",
      content: `Ms. Shalini Kamath
(Company Secretary & Compliance Officer)
NESCO Center,
Western Express Highway,
Goregaon (East), Mumbai 400063
Tel: +91 22 66450123
Mobile: 9137500282
Email: companysecretary@nesco.in`,
    },

    {
      title: "REGISTRAR & TRANSFER AGENT",
      content: `Link Intime India Private Limited
Unit: Nesco Limited
C-101, 247 Park,
LBS Marg, Vikhroli West,
Mumbai 400083.
Phone: +91 22 4918 6270
Fax: +91 22 4098 6060
Email: rnt.helpdesk@linkintime.co.in`,
    },
  ];
  return (
    <div className="shareholders">
      <Navbar />

      <div className="relative w-auto h-auto bg-cyan-300">
        <div className="imgContainer">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="financials"
            className="w-full object-cover h-auto"
          />
        </div>

        <div
          className="sideBox absolute top-1/2 
  left-1/2 sm:left-1/2 md:left-auto md:right-0 lg:right-0
  transform -translate-x-1/2 sm:-translate-x-1/2 md:translate-x-0 -translate-y-1/2  
  w-[75%] sm:w-[70%] md:w-[43%] lg:w-[35%]
  py-6 px-4 opacity-80 flex flex-col justify-center items-center bg-blue-400"
        >
          <div className="innerContainer text-center">
            <p className="text-white sm:text-xl md:text-4xl lg:text-6xl font-branding-semibold">
              Shareholders
            </p>
            <p className="text-white sm:text-xl md:text-4xl lg:text-6xl font-branding-semibold">
              Services
            </p>
          </div>
        </div>
      </div>

      <div className="investorDiv py-8 px-4">
        <p className="font-branding-semibold text-4xl sm:text-3xl text-blue-800 m-auto my-6 justify-center text-center">
          Investor Contacts
        </p>
        <div className="contactDiv grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mx-12   ">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              title={contact.title}
              content={contact.content}
            ></ContactCard>
          ))}
        </div>
      </div>

      <div className="shareDiv">
        <p className="font-branding-semibold text-4xl sm:text-3xl text-blue-800 m-auto my-6 justify-center text-center">
          Shareholder's Corner
        </p>

        <div className="tableContainer m-16 my-6 w-auto overflow-x-auto mb-10">
          <table className="table-auto h-full text-left w-full p-8 overflow-auto">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">ABCED</td>
                <td className="px-4 py-2 text-right">
                  <button className="mt-3 bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-700 self-center">
                    ⬇
                  </button>
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">ABCED</td>
                <td className="px-4 py-2 text-right">
                  <button className="mt-3 bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-700 self-center">
                    ⬇
                  </button>
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">ABCED</td>
                <td className="px-4 py-2 text-right">
                  <button className="mt-3 bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-700 self-center">
                    ⬇
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>

      <div className="dividendDiv bg-gray-300 p-4">
        <p className="font-branding-semibold text-4xl sm:text-3xl text-blue-800 m-auto my-6 justify-center text-center ">
          Unclaimed Dividends
        </p>

        <p className="justify-center text-justify w-auto text-2xl sm:text-xl px-12 font-branding-medium">
          Pursuant to Sections 124(5) of the Companies Act, 2013, read with
          rules framed thereunder, the Company is required to transfer the
          amount of dividend remained unpaid/unclaimed for a period of seven
          years from the date of transfer to the Investor Education and
          Protection Fund (IEPF).
        </p>
        <div className="tableDiv m-10 justify-center overflow-x-auto px-2 py-6">
          <table className="table-auto border-separate bg-white m-auto text-center border border-gray-300">
            <thead>
              <tr>
                <th className="bg-blue-800 text-gray-200 p-2">
                  FINANCIAL YEAR
                </th>
                <th className="bg-blue-800 text-gray-200 p-2">DIVIDEND %</th>
                <th className="bg-blue-800 text-gray-200 p-2">
                  UNCLAIMED DIVIDEND <br />
                  <span className="text-sm ">(AMOUNT IN RS.)</span>
                </th>
                <th className="bg-blue-800 text-gray-200 p-2">
                  LAST DATE FOR CLAIMING <br />
                  <span className="text-sm">UNPAID DIVIDEND</span>
                </th>
                <th className="bg-blue-800 text-gray-200 p-2">
                  DUE DATE FOR TRANSFER TO IEPF
                </th>
                <th className="bg-blue-800 text-gray-200 p-2">
                  SHAREHOLDER WISE DETAILS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-2">2015-16</td>
                <td className="p-2">10</td>
                <td className="p-2">40000</td>
                <td className="p-2">25-01-2027</td>
                <td className="p-2">25-01-2030</td>
                <td >
                <button className="m-3 bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-700 self-center">
                    ⬇
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2">2016-17</td>
                <td className="p-2">12</td>
                <td className="p-2">50000</td>
                <td className="p-2">10-02-2028</td>
                <td className="p-2">10-02-2031</td>
                <td >
                <button className="m-3 bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-700 self-center">
                    ⬇
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative  flex justify-center items-center px-6 py-8 ">
        {/* Background Div */}
        <div className="absolute inset-0 bg-white h-3/4"></div>
        <div className="absolute inset-0 bg-blue-200 h-1/4 top-[75%] "></div>

        {/* Content */}
        <div className="relative flex flex-col md:flex-row gap-6 items-stretch">
          {/* Card 1 */}
          <div className="border border-gray-300 shadow-lg p-6 text-center bg-white flex flex-col justify-between w-full md:w-1/2">
            <div className="bg-indigo-900 text-white p-6 flex flex-col flex-grow">
              <h2 className="text-lg font-bold">
                Details of shares transferred to IEPF
              </h2>
              <p className="text-sm flex-grow">
                Pursuant to section 124(6) of the Companies Act.
              </p>
              <button className="mt-3 bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-700 self-center">
                ⬇
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-300 shadow-lg p-6 text-center bg-white flex flex-col justify-between w-full md:w-1/2">
            <div className="bg-indigo-900 text-white p-6 flex flex-col flex-grow">
              <h2 className="text-lg font-bold">
                Application to claim unpaid dividend and shares
              </h2>
              <p className="text-sm flex-grow"></p>{" "}
              {/* Empty paragraph to balance height */}
              <button className="mt-3 bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-700 self-center">
                ➡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
