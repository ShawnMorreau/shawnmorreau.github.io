import React from "react";
import "./styling/home.css";
import "./scripts/typewriter";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
const Home = () => {
  return (
    <div className="home">
      <section id="homepage">
        <section id="name">
          <Typography component="h1" variant="h2" className="titles">
            Shawn
            Morreau
          </Typography>
        </section>
        <h2 className="role content">Software Engineer</h2>
        <section className="callToAction">
          <Typography component="h2" variant="h5" className="text content">
            Check out my projects or let's talk about building your next
            project!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="CTAButton titles"
          >
            <Link to="/project" className="buttonText">
              Projects
            </Link>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="CTAButton titles"
          >
            <Link to="/contact" className="buttonText">
              Contact
            </Link>
          </Button>
        </section>
      </section>
    </div>
  );
};
export default Home;
