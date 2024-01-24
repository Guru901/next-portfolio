import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={`${styles.footer} absoluteCenter`}>
        <h2 className={styles.footerHead}>
          Sooooooooooooooo... 👀 Are you ready?
        </h2>
        <div className={`${styles.h1} absoluteCenter`}>
          <h1>Lets Create Something together</h1>
        </div>
        <button className={`${styles.footerBtn} aniBtn`}>Work With Me</button>
        <div className={`${styles.extras} absoluteCenter`}>
          <p>About Me</p>
          <p>gurvinder@gurvinder.com</p>
          <p>2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
