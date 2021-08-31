import React from "react";
import {Typography} from "@material-ui/core";
import SkillGroupings from "./SkillGroupings"
import "./Styling/Skills.css";
import SkillIcons from "../iconsBanner/iconsBanner";
const SkillsContainer = props => {
    return(
        <div className="skillsContainer">
            <Typography component="h1" variant="h2" className="titles title">Skills</Typography>
            <SkillGroupings/>
            <span id="bottom_images">
                <SkillIcons/>
            </span>
        </div>
    );
}

export default SkillsContainer;