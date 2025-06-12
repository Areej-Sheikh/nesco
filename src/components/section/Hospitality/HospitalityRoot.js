import React from "react";
import Image from "next/image";

// Import kitchen image
import kitchenImage from "@/assests/nesco-business-page/nesco-food-elements/28.jpg";

function HospitalityRoot() {
  return (
    <section className="w-full h-screen bg-white flex flex-col overflow-hidden">
      <div className="w-full h-full px-[5%] py-12">
        <h2 
          className="text-[2.2rem] font-bold mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          The Root
        </h2>
        
        <div className="flex flex-col md:flex-row h-[80%] gap-8">
          {/* Text content */}
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            <p 
              className="text-[1.1rem] mb-5 leading-relaxed"
              style={{ fontFamily: "BrandingRegular" }}
            >
              The nerve centre of the entire Foods operation, the Root is a state-of-the-art central kitchen. The facility allows the preparation of over 80,000 meals a day across a multitude of cuisines. Renowned and experienced chefs at The Root are able to prepare every meal perfectly, while respecting the customs of the cuisine as well as the customer.
            </p>
          </div>
          
          {/* Kitchen image */}
          <div className="md:w-1/2 w-full relative h-[300px] md:h-auto">
            <Image
              src={kitchenImage}
              alt="Chefs working in The Root kitchen"
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

export default HospitalityRoot;