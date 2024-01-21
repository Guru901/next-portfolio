import React from "react";
import Link from "next/link";
import styles from "./404style.module.scss";
import Btn from "@/Components/AnimBtn/Btn";

const NotFound = () => {
  return (
    <div className={styles.container}>
      {/* <img src="/404Text.png" alt="" className={styles.NotFoundImg} /> */}
      <h1 className={styles.notFound}>404</h1>
      <div className={styles.notFoundTextContainer}>
        <h1 className={styles.notFoundHead}>
          Oops, We can seem to find the page what you are looking for.
        </h1>
        <p className={styles.notFoundPara}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link href={"/"}>
          <Btn title={"Back to Home"} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
