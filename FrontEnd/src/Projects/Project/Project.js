import React from "react";
import Skill from "../Skill/Skill";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons";
const Project = (props) => {
  const gitIcon = <FontAwesomeIcon icon={faGithubAlt}/>

  const { title, desc, skills,link} = props;
  const skillMap = skills.map((skill, i) => <Skill name={skill} key={i} />);
  return (
    <div className="project">
      <span id="title" className="content">{title}</span>
      <div id="info" className="content">
        <div id="desc">{desc}</div>
        <a href={link} id = "gitIcon" target="_blank" rel="noopener noreferrer">{gitIcon}</a>
        <div id="skills">{skillMap}</div>
      </div>
    </div>
  );
};

export default Project;
