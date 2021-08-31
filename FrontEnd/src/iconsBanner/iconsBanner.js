import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const iconsBanner = () => {
    
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
    return(
        <section id="logos">{arr}</section>
    );
}
export default iconsBanner;