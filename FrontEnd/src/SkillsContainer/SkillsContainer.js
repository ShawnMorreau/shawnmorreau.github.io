import React from "react";
import {Typography} from "@material-ui/core";
import SkillGroupings from "./SkillGroupings"
import "./Styling/Skills.css";
import binary from "../images/rsz_binary.png";
import keyboard from "../images/rsz_projects_2.png"
const SkillsContainer = props => {
    return(
        <div className="skillsContainer">
            <Typography component="h1" variant="h2" className="titles">Skills</Typography>
            <SkillGroupings/>
            <span id="bottom_images">
                <img className="binary" src={binary} alt=""/>
                <img className="hands" src={keyboard} alt=""/>
            </span>
        </div>
    );
}

export default SkillsContainer;