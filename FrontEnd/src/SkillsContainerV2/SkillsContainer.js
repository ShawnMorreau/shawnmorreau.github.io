import React from "react";
import skillList from "./Skills.json";
import Skill from "./Skill";
import "./Skill.css";
export default function SkillsContainer() {
    let title;
  const skills = skillList.skills.map((category,idx) => (
    title = (title === Object.keys(category)[0] ? title : Object.keys(category)[0]),
    <Skill 
        title={title} 
        skills={Object.values(category[title])} 
        key={`${category}-${idx}`}
    />
  ));

  return (
    <div className="container">
      {skills}
    </div>
  );
}
