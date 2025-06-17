import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/Indabrator-Elements/65.jpg";

function IndabratorProfile() {
  return (
    <section className="w-full h-screen overflow-hidden bg-[#f9f9f9] flex items-center">
      <div className="px-[5%] w-full h-full flex items-center">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="flex-[2] pr-0 md:pr-12 mb-8 md:mb-0">
            <h2
              className="text-[1.6rem] md:text-[1.8rem] font-bold mb-8"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Meet the people who make it possible.
            </h2>
            <h3 
              className="text-[1.4rem] md:text-[1.6rem] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Dr Pawan Kumar Singh
            </h3>
            <p 
              className="text-[1.1rem] text-[#666] mb-6"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Vice-President, Sales & Operations
            </p>
            <p 
              className="text-[1rem] leading-[1.8] mb-4"
              style={{ fontFamily: "BrandingRegular" }}
            >
              Motto: "Shape the sustainable future by creating unprecedented value for stakeholders." With over 27 years of experience, Dr. Singh's proven track record and passion helps him serve as a President - Sales & Operations. In his role, he oversees and leads Nesco's Manufacturing and Distribution with responsibilities that span across the group's industrial products segment.
            </p>
            <p 
              className="text-[1rem] leading-[1.8] mb-4"
              style={{ fontFamily: "BrandingRegular" }}
            >
              His expertise extends to several aspects of business management, including R&D, equipment in-plant parts operations within heavy engineering, chemicals and intermediates, railway products, automotive manufacturing, and machine building segments. Dr Singh has worked with several multinational enterprises in these fields.
            </p>
            <p 
              className="text-[1rem] leading-[1.8]"
              style={{ fontFamily: "BrandingRegular" }}
            >
              He has built a proven track record in Operational Excellence and Efficiencies, Value Engineering, Sustainability, Safety, Quality management in his prior Multinational experiences. He led New Introduction, R&D served in B2B Sales, Business Development & Strategy, Customer and Market Expansion & Retention. Financial planning and strategic implementation alongside General Management.
            </p>
          </div>

          {/* Image Container */}
          <div className="flex-1 relative h-[350px] md:h-[450px] w-full">
            <Image
              src={profileImage}
              alt="Dr Pawan Kumar Singh"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndabratorProfile;