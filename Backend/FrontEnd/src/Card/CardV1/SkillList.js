import React from "react";
import Typography from "@material-ui/core/Typography";
import "./CardStyling.css";
export default function SkillList(props){
    const setActive=(e)=>{
        const active = e.target.innerHTML;
        props.updateActive(active);
    }

    const x = props.allProps.skills.map((x,i)=>
        <Typography 
            key={i}
            className="skill" 
            variant="button" 
            component="p"
            onClick={setActive}
        >
            {x.value}
        </Typography>
    );
    return(
        <>
            <Typography className="skillList" variant="h1" component="ul">
                {x}
            </Typography>
        </>
    );
}