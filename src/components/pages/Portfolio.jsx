import React from "react";

import Home from "./Home";
import Projects from "./Projects";
import Showcase from "./Showcase";
import Goals from "./Goals";
import Contact from "./Contact";
import Footer from "../layout/Footer";

function Portfolio() {
  return (
    <>
      <Home />
      <Projects />
      <Goals />
      <Showcase />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default Portfolio;
