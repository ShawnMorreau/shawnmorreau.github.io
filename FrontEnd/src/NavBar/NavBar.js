import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";
import LogoSvg from "../svg/LogoSvg.js";
export default function NavBar(){
    return(
        <div id="navBar">
            <div id="logo">
            <Link to="/"><LogoSvg/></Link>
            {/* <Link to="/"><h2>Shawn Morreau</h2></Link> */}
            </div>
            <div id="links">
               
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/blog">Blog</Link>

            </div>
        </div>
    );
}