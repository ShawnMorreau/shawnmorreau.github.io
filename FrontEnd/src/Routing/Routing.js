import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "../Contact/Contact";
import ProjectsContainer from "../Projects/ProjectContainer/ProjectsContainer";
export default function Routing() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/project" component={ProjectsContainer} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
