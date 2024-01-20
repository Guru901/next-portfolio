"use client";

import Hero from "@/Components/Hero/hero";
import Loader from "@/Components/Loader/loader";
import React, { useEffect } from "react";
import gsap, { Expo } from "gsap";

const Home = () => {
  useEffect(() => {
    const box = document.querySelector(".box");
    document.addEventListener("mousemove", function (dets) {
      gsap.to(box, {
        x: dets.pageX - 5,
        y: dets.pageY - 105,
        duration: 0.5,
        ease: Expo,
        opacity: 1,
      });
    });
  }, []);

  return (
    <div>
      <div className="box"></div>

      <Loader />
      <Hero />
    </div>
  );
};

export default Home;
