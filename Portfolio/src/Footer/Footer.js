import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./Footer.css";
export default function Footer() {
    return (
        <div id="footer">
            <a href="https://github.com/ShawnMorreau/shawnmorreau.github.io" 
                target="_blank"
                rel="noopener noreferrer">
                <i className="github fa-2x fa fa-github">
                </i></a>
            <span className="callToAction">What is good my G </span>
        </div>
    );
}

