import React from "react";
import styles from "./style.module.scss";

const Btn = ({ title }) => {
  return <button className={styles.btn}>{title}</button>;
};

export default Btn;
