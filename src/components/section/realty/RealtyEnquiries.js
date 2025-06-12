import React from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // Importing Material Design icons

function RealtyEnquiries() {
  return (
    <section className="py-16 px-[5%] bg-[#2c3e50] text-white w-full">
      <div className="w-[90%] mx-auto">
        <h2 
          className="text-[1.8rem] font-bold mb-8"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          For Enquiries
        </h2>
        <div className="flex flex-col gap-4">
          <p className="flex items-center text-[1rem]">
            <span className="mr-3 text-xl">
              <MdEmail />
            </span>
            <span style={{ fontFamily: "BrandingMedium" }}>contact@nescoreality.in</span>
          </p>
          <p className="flex items-center text-[1rem]">
            <span className="mr-3 text-xl">
              <MdPhone />
            </span>
            <span style={{ fontFamily: "BrandingMedium" }}>022 66450123</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RealtyEnquiries;