import React from "react";
import "./NavBar.css";
export default function NavBar(){
    return(
        <div id="navBar">
            <div id="logo">
                <h2>Shawn Morreau</h2>
            </div>
            <div id="links">
                <a href="">GitHub</a>
                <a href="">About Me</a>
                <a href="">Contact Me</a>
            </div>
        </div>
    );
}