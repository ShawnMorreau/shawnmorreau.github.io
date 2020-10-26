import React from "react";
import { Typography } from "@material-ui/core";
import "./Styling/about.css";
import aboutBackground from "../images/about.png";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faFileCode
} from "@fortawesome/free-solid-svg-icons";
const About = (props) => {
  const laptop = <FontAwesomeIcon icon={faLaptopCode} />;
  const code = <FontAwesomeIcon icon={faFileCode}/>;
  return (
    <div id="about">
      
      <section id = "details">
        <Typography id="title" variant="h3" component="h1">About Me</Typography>
        <section id="desc">
          <span id="laptop">{laptop}</span>
          <Typography component="p">
            Hello, my name is Shawn and I'm a Software Engineer based in Sarnia,
            Ontario.
            <br />
            I enjoy learning new frameworks, libraries and languages to be able
            to create a wide variety of content. I also enjoy practicing coding
            challenges on Leetcode in order to continue testing my problem
            solving skills.
            <br />
          </Typography>
        </section>
        <section id="selfLearning">
          <Typography component="p">
            Through my degree at Carleton University I learned Java, Python, C and Racket with a 
            main focus on Java, OOP practices, design patterns, data structures, architechure, documenting code,
            UML diagrams, and working in project groups. On my own through courses, tutorials and documentation I have learned 
            Javascript, React, HTML/CSS, Ruby, MongoDB, Express and libraries to use in conjunction with the programs/web apps.
          </Typography>
          <span id="code">{code}</span>
        </section>
      </section>
      <section id="images">
        <img id="background" src={aboutBackground} alt=""/>
      </section>
    </div>
  );
};
export default About;
