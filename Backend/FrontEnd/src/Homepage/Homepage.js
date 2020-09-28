import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import myImage from "../images/bg.jpg";

export default function Homepage() {
  const classes = useStyles();
  return (
    <>
      <img id="myImg" src={myImage} alt="" />
      <div id="homePageContent" className="animate">
        <h1>
          Welcome! <br />
        </h1>
        <h2 id="description">
          I am a full-stack developer who focuses on<br/> writing clean and scalable
          code!
        </h2>
        <span className={classes.root}>
          <Button>
            <Link to="/about">Learn More</Link>
          </Button>
          <Button>
            <Link to="/contact">Contact Me</Link>
          </Button>
        </span>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textDecoration: "none",
      WebkitTextStroke: ".1px #caa",
    },
    "&>*:hover": {
      textShadow: "1px 0 2px #ff0faa",
    },
  },
}));
