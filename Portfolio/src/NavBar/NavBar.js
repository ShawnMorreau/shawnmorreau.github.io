import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";
export default function NavBar(){
    return(
        <div id="navBar">
            <div id="logo">
                <h2>Shawn Morreau</h2>
            </div>
            <div id="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/blog">Blog</Link>

            </div>
        </div>
    );
}