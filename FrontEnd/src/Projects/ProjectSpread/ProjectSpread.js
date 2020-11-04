import React from "react";
import MiniView from "./MiniView";
import "./Styling/ProjectSpread.css";
const ProjectSpread = (props) => {
  let { handleClick, projects, active,id} = props;
  let projectsMiniViews = projects.map((project,i) => (
    <MiniView 
        name={project.title} 
        key={i + "-key"}
        handleClick={()=>handleClick(i)}
        active={active}
        id={i}
    />
  ));
  return(
    <div id = "spread">
      {projectsMiniViews}
    </div>
  );
};

export default ProjectSpread;
