import React from "react";
import { Typography } from "@material-ui/core";
import "./Styling/about.css";
import aboutBackground from "../images/about.png";
import me from "../images/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faFileCode } from "@fortawesome/free-solid-svg-icons";
import {
  faJava,
  faJs,
  faNode,
  faPython,
  faGithub,
  faReact,
  faHtml5,
  faCss3,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const About = (props) => {
  const laptop = <FontAwesomeIcon key={0} icon={faLaptopCode} />;
  const code = <FontAwesomeIcon key={1} icon={faFileCode} />;
  const java = <FontAwesomeIcon key={2} icon={faJava} />;
  const js = <FontAwesomeIcon key={3} icon={faJs} />;
  const node = <FontAwesomeIcon key={4} icon={faNode} />;
  const html = <FontAwesomeIcon key={5} icon={faHtml5} />;
  const python = <FontAwesomeIcon key={6} icon={faPython} />;
  const github = <FontAwesomeIcon key={7} icon={faGithub} />;
  const react = <FontAwesomeIcon key={8} icon={faReact} />;
  const css = <FontAwesomeIcon key={9} icon={faCss3} />;
  const scss = <FontAwesomeIcon key={10} icon={faSass} />;
  const arr = [java, js, node, html, python, github, react, css, scss];
  return (
    <div id="about">
      <Typography id="title" className="header" variant="h3" component="h1">
        About Me
      </Typography>
      <div id="images">
        <img id="me" src={me} alt="" />
      </div>
      <section id="details">
        <section id="desc">
          <Typography component="p" className="content">
            Hello, my name is Shawn and I'm a Software Engineer based in Sarnia,
            Ontario. I enjoy learning new frameworks, libraries and languages to
            be able to create a wide variety of content. I also enjoy practicing
            coding challenges on Leetcode in order to continue testing my
            problem solving skills.
            <br />
          </Typography>
          <span id="laptop">{laptop}</span>
        </section>
        <section id="selfLearning">
          <Typography component="p" className="content">
            Through my degree at Carleton University I learned Java, Python, C
            and Racket with a main focus on Java, OOP practices, design
            patterns, data structures, architechure, documenting code, UML
            diagrams, and working in project groups. On my own through courses,
            tutorials and documentation I have learned Javascript, React,
            HTML/CSS, Ruby, MongoDB, Express and libraries to use in conjunction
            with the programs/web apps.
          </Typography>
          <span id="code">{code}</span>
        </section>
      </section>
      <div className="bottom">
        <section id="logos">{arr}</section>
      </div>
    </div>
  );
};
export default About;
