import React from "react";
import Image from "next/image";

// Import kitchen image
import kitchenImage from "@/assests/nesco-business-page/nesco-food-elements/28.jpg";

function HospitalityRoot() {
  return (
    <div className="w-full max-w-[90%] h-auto lg:min-h-screen flex flex-col md:flex-row overflow-hidden bg-white mx-auto py-8 md:py-0 lg:mt-4 my-0 md:my-10 lg:my-0">
      {/* Left column - description */}
      <div className="md:w-1/2 w-full py-6 md:py-[2%] flex flex-col justify-center">
        <h2
          className="text-[1.8rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold mb-4 md:mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          The Root
        </h2>
        <p
          className="text-[1.2rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] leading-relaxed "
          style={{ fontFamily: "BrandingMedium" }}
        >
          The nerve centre of the entire Foods operation, the Root is a
          state-of-the-art central kitchen. The facility allows the preparation
          of over 80,000 meals a day across a multitude of cuisines. Renowned
          and experienced chefs at The Root are able to prepare every meal
          perfectly, while respecting the customs of the cuisine as well as the
          customer.
        </p>
      </div>

      {/* Right column - image */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-4 md:px-6 lg:px-8 py-6 md:py-16">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-100 shadow-lg rounded-lg">
          <Image
            src={kitchenImage}
            alt="Chefs working in The Root kitchen"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
          />
        </div>
      </div>
    </div>
  );
}

export default HospitalityRoot;
