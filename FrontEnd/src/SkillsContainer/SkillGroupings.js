import React from "react";
import Skills from "./Skills.json";
import Skill from "./Skill";
const SkillGroupings = (props) => {
  const skills = Skills.skills.map((skill, i) => (
    <Skill
      skillInfo={Object.values(skill)[0]}
      key={i + "-key"}
      title={Object.keys(skill)[0]}
    />
  ));
  return <div className="skillGrouping">{skills}</div>;
};
export default SkillGroupings;
