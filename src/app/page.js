"use client";

import styles from "./page.module.scss";
import Hero from "@/Components/Hero/hero";
import Loader from "@/Components/Loader/loader";
import Projects from "@/Components/Projects/project";
import smoothScroll from "@/Components/SmoothScroll";
import MouseFollower from "@/Components/MouseFollower";
import { useEffect } from "react";
import Reviews from "@/Components/Reviews/Reviews";

const Home = () => {
  useEffect(() => {
    MouseFollower();
    smoothScroll();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className="box"></div>
      <Loader />
      <Hero />
      <Projects />
      <Reviews />
    </div>
  );
};

export default Home;
