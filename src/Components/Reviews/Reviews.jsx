import React from "react";
import styles from "./style.module.scss";
import Heading from "../Heading/heading";
import Review from "./Review/Review";

const Reviews = () => {
  return (
    <div className={`${styles.rcont} absoluteCenter`}>
      <div className="review">
        <Heading top={"What"} bottom={"People Say"} />
        <div className={styles.rs}>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
