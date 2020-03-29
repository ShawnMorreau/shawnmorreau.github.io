import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import About from "../About/About.js";
import BlogContainer from "../Blog/BlogContainer";
import "../Syling/Styling.css";
export default function Routing(){
    return(
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={About}/>
                    <Route path="/blog" component={BlogContainer}/>
                </Switch>
            </div>
    );
}