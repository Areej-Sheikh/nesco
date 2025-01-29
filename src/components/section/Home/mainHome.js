"use client";
import React, { useEffect } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import HomeBanner from "./HomeBanner";
import Goal from "./Goal";
import Mentor from "./Mentor";
import Service from "./Service";
import Life from "./Life";
import News from "./News";
import "./mainHome.css";

function MainHome() {
  useEffect(() => {
    const container = document.querySelector(".container");
    let isScrolling = false;

    const smoothScrollTo = (targetY, duration = 1000) => {
      const start = container.scrollTop;
      const change = targetY - start;
      const startTime = performance.now();

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easing = easeInOutQuad(progress);
        container.scrollTop = start + change * easing;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleScroll = (e) => {
      if (isScrolling) return;

      isScrolling = true;
      const delta = e.deltaY;
      const sections = Array.from(document.querySelectorAll(".section"));
      const currentScroll = container.scrollTop;

      if (delta > 0) {
        // Scroll down
        const nextSection = sections.find(
          (section) => section.offsetTop > currentScroll + 10 // Allow small tolerance
        );
        if (nextSection) {
          smoothScrollTo(nextSection.offsetTop);
        }
      } else {
        // Scroll up
        const prevSection = sections
          .slice()
          .reverse()
          .find((section) => section.offsetTop < currentScroll - 10); // Allow small tolerance
        if (prevSection) {
          smoothScrollTo(prevSection.offsetTop);
        }
      }

      // Allow new scrolling after animation
      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Match duration of `smoothScrollTo`
    };

    container.addEventListener("wheel", handleScroll);

    return () => container.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <Pagewrapper>
      <div className="container">
        <div className="section">
          <HomeBanner />
        </div>
        <div className="section">
          <Goal />
        </div>
        <div className="section">
          <Mentor />
        </div>
        <div className="section">
          <Service />
        </div>
        <div className="section">
          <Life />
        </div>
        <div className="section">
          <News />
        </div>
      </div>
    </Pagewrapper>
  );
}

export default MainHome;
