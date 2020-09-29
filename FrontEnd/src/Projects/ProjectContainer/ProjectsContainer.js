import React, { useState, useEffect } from "react";
import "../Styling/Projects.css";
import Projects from "../Projects.json";
import Project from "../Project/Project";
import ProjectSpread from "../ProjectSpread/ProjectSpread";
const ProjectsContainer = () => {
  let [activeProject, setActiveProject] = useState(0);
  let mappedProjects = Projects.projects.map((project, i) => (
    <Project
      title={project.title}
      desc={project.desc}
      skills={project.skills}
      key={i}
    />
  ));

  return (
    <div className="projectsContainer">
      <aside id="title">Projects</aside>
      <section className="activeProject">
        {activeProject > 0 && (
          <div className="prev" onClick={() => setActiveProject(activeProject - 1)}></div>
        )}
        {mappedProjects[activeProject]}
        {activeProject < mappedProjects.length - 1 && (
          <div className="next" onClick={() => setActiveProject(activeProject + 1)}></div>
        )}
      </section>
      <section id="allProjects">
          <ProjectSpread
            projects = {Projects.projects}
            active = {activeProject}
          />
      </section>
    </div>
  );
};

export default ProjectsContainer;
