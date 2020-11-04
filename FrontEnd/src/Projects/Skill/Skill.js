import React from "react";

const Skill = props =>{
    const {name} = props;
    return(
        <span className = "skill">
            {name} &nbsp;
        </span>
    );
}
export default Skill;