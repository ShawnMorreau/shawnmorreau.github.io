import React from "react";

const Skill = ({skillInfo,title}) => {
    let skills = skillInfo.map((item,i)=>
            <li key={i} className="skill">{item["name"]}</li>
        );
    return(
            <ul className="skillList content">
                <h3>{title}</h3>
                {skills}
            </ul>
    );
}
export default Skill;