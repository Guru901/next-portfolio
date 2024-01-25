"use client";

import gsap, { Expo } from "gsap";

const MouseFollower = () => {
  const box = document.querySelector(".box");
  document.addEventListener("mousemove", function (dets) {
    gsap.to(box, {
      x: dets.pageX - 15,
      y: dets.pageY - 110,
      duration: 0.5,
      ease: Expo,
      opacity: 1,
    });
  });
};

export default MouseFollower;
