import React from "react";
import styles from "./style.module.scss";

const Projects = () => {
  const projects_arr = [
    {
      img: "https://images.unsplash.com/photo-1557977275-d261356f567f?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BEATVEST",
      des: "ui design ui design 😁",
      key: 1,
    },
    {
      img: "https://images.unsplash.com/photo-1557977275-d261356f567f?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BEATVEST",
      des: "ui design ui design 😁",
      key: 2,
    },
  ];

  return (
    <div className={`${styles.projectCard} absoluteCenter`}>
      {projects_arr.map((x) => (
        <div className={`${styles.project} absoluteCenter`} key={x.key}>
          <img src={x.img} alt="Project Image" className={styles.projectImg} />
          <div className={`${styles.linkCircle} absoluteCenter`}>
            <svg viewBox="0 0 512 512" width="34">
              <path d="M412.6 227.1L278.6 89c-5.8-6-13.7-9-22.4-9h-.4c-8.7 0-16.6 3-22.4 9l-134 138.1c-12.5 12-12.5 31.3 0 43.2 12.5 11.9 32.7 11.9 45.2 0l79.4-83v214c0 16.9 14.3 30.6 32 30.6 18 0 32-13.7 32-30.6v-214l79.4 83c12.5 11.9 32.7 11.9 45.2 0s12.5-31.2 0-43.2z"></path>
            </svg>
          </div>
          <div className={styles.pdes}>
            <h1>{x.title}</h1>
            <p>{x.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Projects;
