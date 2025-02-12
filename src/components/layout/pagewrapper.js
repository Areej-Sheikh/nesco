import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";

function Pagewrapper({ children }) {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
}

export default Pagewrapper;
