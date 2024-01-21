import React from "react";
import styles from "./style.module.scss";

const Btn = ({ title, classNamee }) => {
  return <button className={`${styles.btn} ${classNamee}`}>{title}</button>;
};

export default Btn;
