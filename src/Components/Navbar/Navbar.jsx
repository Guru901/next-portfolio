"use client";

import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Links from "./links/Links";
import Link from "next/link";
import gsap, { Power1 } from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const btnRef = useRef();
  const navClose = () => {
    gsap.to(navRef.current, {
      duration: 0.75,
      height: "0",
      ease: Power1,
    });
    btnRef.current.innerHTML = "Menu";
  };
  const navOpen = () => {
    gsap.to(navRef.current, {
      duration: 0.75,
      height: "100svh",
      ease: Power1,
    });
    btnRef.current.innerHTML = "Close";
  };
  const handleClick = (e) => {
    if (e.target.innerHTML === "Close") {
      navClose();
    } else if (e.target.innerHTML === "Menu") {
      navOpen();
    }
  };

  const handleLinkClick = () => {
    navClose();
  };

  console.log();
  return (
    <div className={styles.navContainer}>
      <div ref={navRef} className={`${styles.nav} absoluteCenter`}>
        <div className={styles.nleft}>
          <video src="vid.mp4" autoPlay loop muted></video>
        </div>
        <div className={styles.nright}>
          <Links close={handleLinkClick} />
          <button className={`${styles.navBtn} aniBtn`}>Work With Me</button>
        </div>
      </div>
      <div className={styles.menu}>
        <Link href="/" className={styles.title} onClick={() => navClose()}>
          Gurvinder Singh
        </Link>
        <button
          className={styles.menuBtn}
          onClick={(e) => handleClick(e)}
          ref={btnRef}
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;
