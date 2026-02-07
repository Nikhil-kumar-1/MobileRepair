import React from "react";
import Hero from "./Hero";
import About from "./AboutHome";
import RepairArena from "./ServiceHome";
import Testimonials from "./Testimonial";
import GetInTouch from "./GetInTouch";

const Home = () => {
  return (
          <>
          <Hero />
          <About />
          <RepairArena />
          <Testimonials />
          <GetInTouch />
          </>
  );
};

export default Home;
