import React from "react";
import "./Homepage.css";
import BlogContainer from "../Blog/BlogContainer.js"
export default function Homepage(){
    return(
        <div className="main">
            <h1>Shawn Morreau</h1>
            <BlogContainer/>
        </div>
    );
}