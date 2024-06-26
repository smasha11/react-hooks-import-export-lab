import React from "react";
import {image} from"../data/user.js";

function About() {

  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="About" />
    </div>
  );
}

export default About;

