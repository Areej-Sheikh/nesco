import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

function IndabratorEnquiries() {
  return (
    <section className="py-16 px-[5%] bg-blue-900 text-white w-full">
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
            <span style={{ fontFamily: "BrandingMedium" }}>sales@indabrator.com</span>
          </p>
          <p className="flex items-center text-[1rem]">
            <span className="mr-3 text-xl">
              <MdPhone />
            </span>
            <span style={{ fontFamily: "BrandingMedium" }}>+91 99099 44443</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndabratorEnquiries;