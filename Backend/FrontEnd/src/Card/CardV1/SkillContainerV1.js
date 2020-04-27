import React from "react";
import SkillList from "./SkillList.js";
import SkillDescription from "./SkillDescription.js"
import "./CardStyling.css";
export default function SkillContainerV1(props) {
    return (
        <div className="card">
            <h1 className="cardTitle">{props.title}</h1>
            <div className="skillContainer">
                <SkillList
                    allProps={props}
                    updateActive={props.updateActive}
                />
                <SkillDescription
                    content={props.active.content || "Click me"}
                />
            </div>
        </div>
    );
}