import React from "react";
import whoAreYou from "../images/whoAreYou.gif";
import shawn from "../images/shawn.jpeg";
import tonka from "../images/tonka.jpeg";
import "./styles/Tom.css";
import aboutMe from "./whyMe.json";
import Weather from "./Weather";
import NoShot from "./noShotEx.mov";
const Tom = () => {
  const tellMeWhy = aboutMe.me.map((stat, i) => (
    <li key={i}>
      <h4 id="topic">{stat.thing}</h4>
      <p id="response">{stat.desc}</p>
    </li>
  ));
  return (
    <div id="tom">
      <div className="imageContainer">
        <img id="img" src={whoAreYou} />
        <h2 className="bubble">Hello, I am Shawn </h2>
        <img src={shawn} id="img" />
      </div>

      <ol id="aboutMe">
        <h2 className="bubble">A little about me</h2>
        <li>
          <h4 className="subHeader">I enjoy helping people!</h4>
          <p id="answer">
            Through Twitch I've taught many people the basics of JS, helped to
            find solutions to answers we both didn't know, and have helped debug
            many errors.
          </p>
        </li>
        <li>
          <h4 className="subHeader">I enjoy learning</h4>
          <p id="answer">
            It's part of being a software engineer, so it's probably a good
            trait to have. I enjoy exploring languages and learning about
            frameworks and tools that may help solve a problem in a more optimal
            way or just abstract away a lot of complexity and make the
            development lifecycle a little simpler.
          </p>
        </li>
        <li>
          <figure id="doggo">
            <h4 className="subHeader bubble">Tonka</h4>
            <img id="tonka" src={tonka} alt="dog" />
            <figcaption id="caption">
              No, she's not a pet goldfish, as mentioned in your post, although
              she's a Mastiff that can be a "Mastiff" pain in the butt who hides
              it by being adorable.
            </figcaption>
          </figure>
        </li>
      </ol>
      <section id="whyHireMe">
        <h2 className="bubble">Now for the good stuff</h2>
        <h3>Why should you consider hiring me?</h3>
        {tellMeWhy}
      </section>
      <section id="vid">
        <p>My Last Project</p>
        <video id="video" controls>
          <source src={NoShot} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p id="caption">
          <a
            rel="noopener noreferrer"
            href="https://github.com/ShawnMorreau/noshotv2-backend"
            target="_blank"
          >
            Github
          </a>
        </p>
        <p className="vidExamplesCaption">
          This is a very barebones app that I made to mimic a card game called
          "Red Flags". My partner was very intrigued in trying it but the game
          was sold out so I made this. Got it to a working state with some bugs
          and a lot of "todos". I have reached my main goal for this project and
          don't know if I will persue it further only because I'd have to change
          a lot otherwise I'd run into legal problems. Also, there's still a ton
          of work to be done for it to be a production grade project.
        </p>
        <hr/>
        <Weather />
      </section>
    </div>
  );
};

export default Tom;
