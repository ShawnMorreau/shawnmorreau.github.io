import React from "react";
import {
    HashRouter as Router, 
    Switch,
    Route,
    Link    
} from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import About from "../About/About.js";
import BlogContainer from "../Blog/BlogContainer";
import "../Syling/Styling.css";
export default function Routing(){
    return(
            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Homepage/>
                    </Route>
                    <Route path="/blog">
                        <BlogContainer/>
                    </Route>
                </Switch>
            </div>
    );
}