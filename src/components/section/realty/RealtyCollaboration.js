import React from "react";
import Image from "next/image";

// Import collaboration image
import collaborationImage from "@/assests/nesco-business-page/nesco-reality-elements/6.jpg";

function RealtyCollaboration() {
  return (
    <section className="w-full h-screen overflow-hidden bg-white">
      <div className="w-full h-full relative">
        <Image
          src={collaborationImage}
          alt="Team collaboration and meeting"
          fill
          className="object-cover w-full"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={100}
        />
      </div>
    </section>
  );
}

export default RealtyCollaboration;