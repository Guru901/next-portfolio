"use client";

import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap, { Expo } from "gsap";

const Hero = () => {
  const h1Ref = useRef();
  const h2Ref = useRef();

  const anim = (prop) => {
    gsap.to(prop, {
      delay: 0.45,
      y: "-230% ",
      duration: 1,
      ease: Expo.easeInOut,
    });
  };

  useEffect(() => {
    anim(h1Ref.current);
    anim(h2Ref.current);

    return () => {};
  }, []);

  return (
    <div className={`${styles.heroMain} absoluteCenter`}>
      <div className={`${styles.h1Container} absoluteCenter`}>
        <h1 className={styles.firH1} ref={h1Ref}>
          Gurvinder is a
        </h1>
        <h1 className={styles.secH1} ref={h2Ref}>
          <span>Web</span> Developer
        </h1>
      </div>
    </div>
  );
};

export default Hero;
