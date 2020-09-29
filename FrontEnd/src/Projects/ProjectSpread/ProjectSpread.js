import React from "react";
import MiniView from "./MiniView";
const ProjectSpread = (props) => {
  let { projects, active } = props;
  let projectsMiniViews = projects.map((project,i) => (
    <MiniView 
        name={project.name} 
        key={i}
    />
  ));
  return(
    <div>
        {projectsMiniViews}
    </div>
  );
};

export default ProjectSpread;
