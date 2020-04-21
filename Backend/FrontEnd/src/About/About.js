import React from "react";
import "./About.css";
import Image from "../images/me.jpg";
import SkillsContainer from "../Skills/SkillsContainer.js";
import CardV1 from "../Card/CardV1/CardV1.js";
export default function About() {
    return (
        <div id="about">
            <img src={Image} alt="" />
            <h2>How you doin, I see you.</h2>
            <p>Ma name is Shawn!!!</p>
            
            <p> Hello, it's me. Ya boi Yung G. I don't know what Imma put in here yet but as you all know
                imma real one out here in these streets yuuuuhHello, it's me. Ya boi Yung G. I don't know what Imma put in here yet but as you all know
                imma real one out here in these streets yuuuuhHello, it's me. Ya boi Yung G. I don't know what Imma put in here yet but as you all know
                immere in these streets yuuuuhHello, it's me. Ya boi Yung G. I don't know what Imma put in here yet but as you all know
                imma real one out here in these streets yuuuuhHello, it's me. Ya boi Yung G. I don't know what Imma put in here yet but as you all know
                imma real one out here in these streets yuuuuhHello, it's me. Ya boi Yung G. I don't know what Imma put in here yet but as you all know
                imma real one out here in these streets yuuuuh</p>
           <div className="skillsCards">
                {/* <SkillsContainer/> */}
                <CardV1/>
                
           </div>
        </div>
    );
}