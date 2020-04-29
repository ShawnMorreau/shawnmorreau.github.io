import React from "react";
import "./Styling/Styling.css";
import Heart from "./SVGS/heart.js";
import Writing from "./Writing/Writing.json";
import Timer from "./Timer.js"
import Celebrate from "./Celebrate.js";
let today = new Date(2020, 3, 28, 23, 59, 0);
let birthday = new Date(2020, 3, 29, 3, 0, 0);
export default class extends React.Component {
    state={
        celebrate:false,
    }
    render() {
        const changeDate=()=>{
            this.setState({celebrate:true});
        }
            if(this.state.celebrate===true){
            return (
                <Celebrate/>
            );
        }
        else {
            return (
                <>
                <Timer
                    currentTime={today}
                    birthday={birthday}
                    changeDate={changeDate}
                />
                </>
            );
        }
    }
}