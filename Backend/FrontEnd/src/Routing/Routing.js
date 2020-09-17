import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import About from "../About/About.js";
import BlogContainer from "../Blog/BlogContainer.js";
import "../Syling/Styling.css";
export default function Routing(){
    return(
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={About}/>
                    <Route exact path="/blog" component={BlogContainer}/>
                </Switch>
            </div>
    );
}