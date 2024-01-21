import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import Btn from "../AnimBtn/Btn";

const Footer = () => {
  return (
    <footer className={`${styles.footer} absoluteCenter`}>
      <h2 className={styles.footerHead}>
        Sooooooooooooooo... 👀 Are you ready?
      </h2>
      <div className={`${styles.h1} absoluteCenter`}>
        <h1>Let's Create Something together</h1>
      </div>
      <Btn title={"Let's Connect"} classNamee={"footerBtn"} />
      <div className={`${styles.extras} absoluteCenter`}>
        <p>About Me</p>
        <p>gurvinder@gurvinder.com</p>
        <p>&copy;2023</p>
      </div>
    </footer>
  );
};

export default Footer;
