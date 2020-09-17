import React from "react";
import "./Homepage.css";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import myImage from '../images/bg.jpg';

export default function Homepage() {
    const classes = useStyles();

    return (
        <>
            {/* <div id="name">Shawn Morreau</div> */}
            <img id="myImg"src={myImage} alt=""/>
            <div id="homePageContent" className ="animate">
                <h1>Welcome to my portfolio!</h1>
                <p>I am looking to apply the skills I have learned to projects
                    in order to build clean scalable projects that clients will love!
                </p>
                <p>To Learn more about me checkout my profile page</p>
                <p>To view projects that I have created view my projects page</p>
                <span className={classes.root}>
                    <Button><Link to="/about">Who Dat</Link></Button>
                    <Button><Link to="/contact">Contact Me</Link></Button>
                </span>
            </div>
        </>
    );
}

const useStyles = makeStyles((theme)=>({
    root:{
        '& > *':{
            margin: theme.spacing(1),
            textDecoration:'none',
            WebkitTextStroke: '.1px #caa',

        },
        '&>*:hover':{
            textShadow: '1px 0 2px #ff0faa',
            color:'white',

        }
    },
}));
