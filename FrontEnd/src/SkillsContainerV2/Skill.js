import React from "react";
// import "./Skill.css";
export default function Skill({title,skills}){
    return(
        <div className = "skill">  
            <h2 className="title">{title}</h2>
            <ul>
                {skills.map((skill, idx) => (
                    <li className="indivSkill" key={`${skill} - ${idx}`}>{skill["name"]}</li>
                ))}
            </ul>

        </div>
    );
}