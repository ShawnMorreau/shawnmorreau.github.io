import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "../Contact/Contact";
import ProjectsContainer from "../Projects/ProjectContainer/ProjectsContainer";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import About from "../About/About";
import Home from "../Home/Home";

export default function Routing() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/skills" component={SkillsContainer}/>
        <Route exact path="/project" component={ProjectsContainer} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
