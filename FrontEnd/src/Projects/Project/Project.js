import React from "react";
import ProjectsContainer from "../ProjectContainer/ProjectsContainer";
import Skill from "../Skill/Skill";
const Project = (props) => {
  const { title, desc, skills, active } = props;
  const skillMap = skills.map((skill, i) => <Skill name={skill} key={i} />);
  return (
    <div className="project">
      <span id="title">{title}</span>
      <div id="info">
        <div id="desc">{desc}</div>
        <div id="skills">{skillMap}</div>
      </div>
    </div>
  );
};

export default Project;
