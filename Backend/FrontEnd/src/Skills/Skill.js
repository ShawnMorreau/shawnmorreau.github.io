import React from "react";
import "./SkillsContainer.css";
import { makeStyles } from '@material-ui/core/styles';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 350,
        height:200,
        backgroundColor: 'blue',
        margin: '0 0 5px 0'
    },
    skillContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        backgroundColor: 'gray',
        minWidth:130,
        height:120
    },
    skill: {
        margin: theme.spacing(0.5),
        border: '1px solid rgba(0,0,0,0.5)',
        fontSize: "0.9rem",
    },
    skillDef:{
        height:120,
        width:'100%',
        margin:0,
        padding:5,
        textAlign:"center"
    },
    title: {
        fontSize: '1rem',
        color: '#ff0000',
        margin: 0,
    },
    body: {
        fontSize: 12,
        margin: 0,
    },
    avatar: {
        color: 'black',
        backgroundColor: 'red',
        margin: 0,
    },
    Card: {
        margin: '0 15px',
        padding: 0,
        display:'flex',
        flexWrap:'none',
        minWidth:100,
        height:120,
    }
}))

export default function Skill(props) {
    const classes = useStyles();
    const [tab,setTab] = React.useState();

    const handleClick=(e)=>{

    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label={props.title} className={classes.avatar}>
                        {props.title.slice(0, 1)}
                    </Avatar>
                }
                title={
                    <Typography
                        className={classes.title}
                        component="h1"
                        variant="button"
                        align="left"
                    >
                        {props.title}
                    </Typography>
                }

            />
            <CardContent className={classes.Card}>
                <Paper component="ul" className={classes.skillContainer} align="center">
                    {props.skills.map(data => {
                        return (
                            <li key={data.key}>
                                <Chip
                                    label={data.value}
                                    className={classes.skill}
                                    onClick={handleClick}
                                />
                            </li>
                        );
                    })}
                </Paper>
                <Paper component="p" className={classes.skillDef}>
                    {"Click on a skill to expand"}
                </Paper>
            </CardContent>
        </Card>
    );
}