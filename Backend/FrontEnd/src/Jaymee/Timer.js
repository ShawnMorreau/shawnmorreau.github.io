import React, {useEffect} from "react";
import "./Styling/Styling.css";

function renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return millisecondsToHuman(totalElapsed);
  }

  function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }
  function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }
export default class extends React.Component{
    state={}
    componentDidMount() {
        // const testTime = new Date(2020, 3, 28, 23, 37, 30);
        // console.log(testTime);
        
        this.interval = setInterval(() => this.setState({ time: renderElapsedString(this.props.birthday- Date.now(),0)}), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render(){
      if(this.state.time === "00:00:00"){
        setTimeout(()=>this.props.changeDate(),2000);
        
      }
        return(
            <div className = "timer">
                <p>{this.state.time}</p>
            </div>
        );
    }
}