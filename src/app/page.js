"use client";

import Hero from "@/Components/Hero/hero";
import Loader from "@/Components/Loader/loader";
import Projects from "@/Components/Projects/project";
import smoothScroll from "@/Components/SmoothScroll";
import MouseFollower from "@/Components/MouseFollower";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    MouseFollower();
    smoothScroll();
  }, []);

  return (
    <div>
      <div className="box"></div>
      <Loader />
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
