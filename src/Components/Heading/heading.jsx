import React from "react";
import styles from "./style.module.scss";

const Heading = ({ top, bottom }) => {
  return (
    <div className={styles.headingTop}>
      <h1 className={styles.head}>
        <div className={`${styles.headTop} absoluteCenter`}>
          {top}
          <div className={`${styles.downCircle} absoluteCenter`}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 384 512"
              height="70"
              width="70"
              color="#14cf93"
            >
              <path d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"></path>
            </svg>
          </div>
        </div>
        <br />
        <span className={`${styles.span} `}>{bottom}</span>
      </h1>
    </div>
  );
};

export default Heading;
