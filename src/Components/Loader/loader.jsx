"use client";

import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
const Loader = () => {
  const blackRef = useRef();
  const greenRef = useRef();

  useEffect(() => {
    gsap.to(blackRef.current, {
      duration: 1,
      delay: 0.25,
      height: "0",
    });

    gsap.to(greenRef.current, {
      duration: 1,
      height: "100vh",
      delay: -0.5,
    });

    gsap.to(greenRef.current, {
      duration: 1,
      height: "0",
      delay: 0.25,
    });

    return () => {};
  }, []);

  return (
    <div id={styles.loader}>
      <div id={styles.black} ref={blackRef}></div>
      <div id={styles.green} ref={greenRef}></div>
    </div>
  );
};

export default Loader;
