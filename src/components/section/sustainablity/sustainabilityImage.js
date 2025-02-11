import Image from "next/image";
import React from "react";
import awardsImage from "@/assests/sustainability/53.png";

function SustainabilityImage() {
  return (
    <div>
      <Image src={awardsImage} className="w-full" alt="awardsImage" />
    </div>
  );
}

export default SustainabilityImage;
