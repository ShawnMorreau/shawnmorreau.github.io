import React from "react";
import "./About.css";
import Image from "../images/me.jpg";
import Skill from "../Skills/Skill";
import Typography from "@material-ui/core/Typography";

export default function About() {
  return (
    <>
      <div id="navBarSpacer"></div>
      <div id="about">
        <div className="spacer"></div>
        <img src={Image} alt="" className="profilePic" />
        <Typography variant = "h3" component="h1">Hello. My name is Shawn!</Typography>
        <Typography id="description" component = "p">
          Thank you for taking interest in me. I have a Bachelor's of
          Engineering with focus in Software Engineering. I owe my foundations
          in backend development to school, but through self learning I have
          also picked up enough knowledge to create sleek front-end experiences.
          I am always eager to continue learning through building and
          collaborating with others!
        </Typography>
        <hr id="spacing" />
        <section className="skills">
          <Typography variant="h3" component="h3">
            Skills/Knowledge
          </Typography>
          <Skill 
            title="tonka" 

            />
        </section>
      </div>
    </>
  );
}
