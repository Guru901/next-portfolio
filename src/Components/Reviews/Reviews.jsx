import React from "react";
import styles from "./style.module.scss";
import Heading from "../Heading/heading";
import Review from "./Review/Review";

const Reviews = () => {
  return (
    <div className={`${styles.rcont} absoluteCenter`}>
      <div className={`${styles.review} absoluteCenter`}>
        <div className={styles.heading}>
          <Heading top={"What"} bottom={"People Say"} />
        </div>
        <div className={`${styles.rs} absoluteCenter`}>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
