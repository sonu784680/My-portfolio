import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Projects from "../components/Project";
import Work from "../components/Work";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
