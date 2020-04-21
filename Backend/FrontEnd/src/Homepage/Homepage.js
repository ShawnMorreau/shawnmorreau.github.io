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
                <h1>Welcome to the underground</h1>
                <span className={classes.root}>
                    <Button><Link to="/about">Who Dat</Link></Button>
                    <Button><Link to="/about">My Skills</Link></Button>
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
