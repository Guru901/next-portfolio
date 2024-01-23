"use client";

import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap, { Expo } from "gsap";
const Loader = () => {
  const blackRef = useRef();
  const greenRef = useRef();
  const h1Ref = useRef();
  const h2Ref = useRef();
  const h3Ref = useRef();
  let tl = gsap.timeline();

  const invi = ({ target, delay }) => {
    tl.to(
      target,
      {
        opacity: 0,
        ease: Expo.easeInOut,
        delay: delay,
      },
      "invi"
    );
  };
  const vi = ({ target, value, opacity }) => {
    tl.to(target, {
      x: value,
      opacity: opacity,
      ease: "power1",
    });
  };

  const load = ({ target, height, duration, delay }) => {
    tl.to(
      target,
      {
        height: height,
        duration: duration,
        delay: delay,
      },
      "load"
    );
  };

  useEffect(() => {
    vi({
      target: h1Ref.current,
      value: -130,
      opacity: 1,
    });

    vi({
      target: h2Ref.current,
      value: 130,
      opacity: 1,
    });

    invi({
      target: h1Ref.current,
      delay: 0,
    });
    invi({
      target: h2Ref.current,
      delay: 0.15,
    });

    load({
      target: blackRef.current,
      duration: 1,
      delay: 0,
      height: 0,
    });
    load({
      target: greenRef.current,
      delay: -1,
      duration: 0.5,
      height: "100vh",
    });
    load({
      target: greenRef.current,
      duration: 1,
      height: 0,
    });

    return () => {};
  }, []);

  return (
    <div id={styles.loader}>
      <div id={styles.black} ref={blackRef}>
        <h1 ref={h1Ref} className={styles.headings} id={styles.visible}>
          Gurvinder
        </h1>
        <h1 ref={h2Ref} className={styles.headings}>
          Singh
        </h1>
      </div>
      <div id={styles.green} ref={greenRef}></div>
    </div>
  );
};

export default Loader;
