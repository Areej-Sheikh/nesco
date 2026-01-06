import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/Indabrator-Elements/65.jpg";

function IndabratorProfile() {
  return (
    <div className="w-full lg:min-h-screen bg-white py-8 lg:py-12">
      <div className="w-[90%] mx-auto lg:mt-20">
        {/* Main heading */}
        <h2
          className="text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[5rem] font-bold leading-[1.1] sm:leading-[1.15] mb-4 sm:mb-6 text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Meet the people who make it possible.
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[5vh] lg:gap-[3vw]">
          {/* Text Content - Left side */}
          <div className="w-full lg:w-[50%] xl:w-[45%] space-y-[2vh]">
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Dr Pawan Kumar Singh
            </h3>
            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#666]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Vice-President- Sales & Operations
            </p>
            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: <span className="font-normal">"Shape the sustainable future by creating unprecedented value and opportunity for our customers, employees, investors, and ecosystem partners."</span>
            </p>
            <p
              className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Dr. Pawan Kumar Singh is heading the Indabrator division as Vice-President- Sales & Operations. In his role, he oversees and leads Nesco's Manufacturing unit (Indabrator), with responsibilities spanning across Sales and Operations.
            </p>
            <p
              className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              His expertise extends to various aspects of business management, including P&L management in multi-plant operations within heavy engineering, industrial/mechanical equipment, components, automotive manufacturing, and machine building segments. Dr. Singh has worked with several multinational companies in these roles.
            </p>
            <p
              className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              He has has a proven track record in Operational Excellence and Efficiencies, Value Engineering, Sustainability, Safety, Quality, Delivery & Cost (S2QDC), and, notably, New Product/Process Introduction. Well-versed in B2B Sales, Business Development & Strategy, Customer and Market Expansion & Retention, Financials including EBIT, Purchase, Project Management, and Supply Chain management.
            </p>
          </div>

          {/* Image Container - Right side */}
          <div className="w-full lg:w-[45%] xl:w-[50%] relative h-[60vh] sm:h-[70vh] lg:h-full flex items-center justify-end">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={profileImage}
                alt="Dr. Pawan Kumar Singh"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndabratorProfile;
