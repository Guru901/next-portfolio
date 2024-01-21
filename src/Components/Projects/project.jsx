import React from "react";
import Projects from "./Project/project";
import styles from "./style.module.scss";
import Link from "next/link";
import Heading from "../Heading/heading";

const project = () => {
  return (
    <div>
      <div className={`${styles.projectsContainer} absoluteCenter`}>
        <div className={`${styles.projects} absoluteCenter`}>
          <div className={`${styles.ptop} absoluteCenter`}>
            <Heading top={"FEATURED"} bottom={"PROJECTS"} />
            <Link href={"/projects"}>see more</Link>
          </div>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default project;
