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
                    <Route exact path="/">
                        component={Homepage}
                    </Route>
                    <Route path="/about">
                        component={About}
                    </Route>
                    <Route path="/contact">
                        component={About}
                    </Route>
                    <Route path="/blog">
                        component={BlogContainer}
                    </Route>
                </Switch>
            </div>
    );
}