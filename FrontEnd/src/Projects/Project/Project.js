import React from "react";
import ProjectsContainer from "../ProjectContainer/ProjectsContainer";
import Skill from "../Skill/Skill";
import graph_img from "../../images/rsz_projects_3.png";
const Project = (props) => {
  const { title, desc, skills, active } = props;
  const skillMap = skills.map((skill, i) => <Skill name={skill} key={i} />);
  return (
    <div className="project">
      <span id="title" className="content">{title}</span>
      <div id="info" className="content">
        <div id="desc">{desc}</div>
        <img src={graph_img} id = "graph" alt=""/>
        <div id="skills">{skillMap}</div>
      </div>
    </div>
  );
};

export default Project;
