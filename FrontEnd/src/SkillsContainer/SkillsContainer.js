import React from "react";
import {Typography} from "@material-ui/core";
import SkillGroupings from "./SkillGroupings"
import "./Styling/Skills.css";
const SkillsContainer = props => {
    return(
        <div className="skillsContainer">
            <Typography component="h1" variant="h2">Skills</Typography>
            <SkillGroupings/>
        </div>
    );
}

export default SkillsContainer;