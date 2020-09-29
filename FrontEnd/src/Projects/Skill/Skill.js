import React from "react";

const Skill = props =>{
    const {name} = props;
    return(
        <span className = "skill">
            {name}
        </span>
    );
}
export default Skill;