import React from "react";
import "./About.css";
import Image from "../images/me.jpg";
import CardV1 from "../Card/CardV1/CardV1.js";
export default function About() {
    return (
        <>
        <div id="navBarSpacer"></div>
        <div id="about">
            <div className="spacer"></div>
            <img src={Image} alt="" className="profilePic"/>
            <h2>How you doin, I see you.</h2>
            <p>Ma name is Shawn!!!</p>
            <p> Hola, mi llamo Shawn. Estoy muy fuego. Queiro trabajo por favor.
                mi esposa llamas Jaymee.
                I need to put a whole bunch of stuff in here but I also don't need to? 
                Should I even have this paragraph here? Do I just put stuff like my resume?
                people don't like to read stuff anyways? put info into a chart or something?
                education, what I enjoy to do, ez?
            </p>
            <hr id="spacing"/>
           <div className="skillsCards">
                <CardV1/>
                
           </div>
        </div>
        </>
    );
}