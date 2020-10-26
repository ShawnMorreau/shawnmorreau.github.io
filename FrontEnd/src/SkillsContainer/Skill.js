import React from "react";

const Skill = ({skillInfo,title}) => {
    let skills = skillInfo.map((item,i)=>
            <li key={i} className="skill">{item["name"]}</li>
        );
    return(
            <ul className="skillList">
                {title}
                {skills}
            </ul>
    );
}
export default Skill;