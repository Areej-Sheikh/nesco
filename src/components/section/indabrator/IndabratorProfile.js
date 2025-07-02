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
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Meet the people who make it possible.
        </h2>

        {/* Profile container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image container - Left side */}
          <div className="w-full lg:w-[40%]">
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

          {/* Text content - Right side */}
          <div className="w-full lg:w-[60%]">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-left"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Dr Pawan Kumar Singh
            </h3>
            <p
              className="text-xl sm:text-2xl lg:text-3xl text-[#666] mb-12 text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Vice-President- Sales & Operations
            </p>

            <div className="mb-10">
              <p
                className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-bold mb-2"
                style={{ fontFamily: "BrandingSemibold" }}
              >
                Belief:{" "}
                <span className="font-normal">
                  "Shape the sustainable future by creating unprecedented value
                  and opportunity for our customers, employees, investors, and
                  ecosystem partners."
                </span>
              </p>
            </div>

            <div className="space-y-10">
              <p
                className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] leading-relaxed"
                style={{ fontFamily: "BrandingMedium" }}
              >
                Dr. Pawan Kumar Singh is heading the Indabrator division as
                Vice-President- Sales & Operations. In his role, he oversees and
                leads Nesco's Manufacturing unit (Indabrator), with
                responsibilities spanning across Sales and Operations.
              </p>

              <p
                className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] leading-relaxed"
                style={{ fontFamily: "BrandingMedium" }}
              >
                His expertise extends to various aspects of business management,
                including P&L management in multi-plant operations within heavy
                engineering, industrial/mechanical equipment, components,
                automotive manufacturing, and machine building segments. Dr.
                Singh has worked with several multinational companies in these
                roles.
              </p>

              <p
                className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] leading-relaxed"
                style={{ fontFamily: "BrandingMedium" }}
              >
                He has has a proven track record in Operational Excellence and
                Efficiencies, Value Engineering, Sustainability, Safety,
                Quality, Delivery & Cost (S2QDC), and, notably, New
                Product/Process Introduction. Well-versed in B2B Sales, Business
                Development & Strategy, Customer and Market Expansion &
                Retention, Financials including EBIT, Purchase, Project
                Management, and Supply Chain management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndabratorProfile;
