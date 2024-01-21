"use client";

import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import Links from "./links/Links";
import Link from "next/link";
import Btn from "../AnimBtn/Btn";
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
    <>
      <div ref={navRef} className={`${style.nav} absoluteCenter`}>
        <div className={style.nleft}>
          <video src="vid.mp4" autoPlay loop muted></video>
        </div>
        <div className={style.nright}>
          <Links close={handleLinkClick} />
          <Btn title={"Work With Me"} />
        </div>
      </div>
      <div className={style.menu}>
        <Link href="/" className={style.title} onClick={() => navClose()}>
          Gurvinder Singh
        </Link>
        <button
          className={style.menuBtn}
          onClick={(e) => handleClick(e)}
          ref={btnRef}
        >
          Menu
        </button>
      </div>
    </>
  );
};

export default Navbar;
