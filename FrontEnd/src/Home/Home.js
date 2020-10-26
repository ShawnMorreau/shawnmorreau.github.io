import React from "react";
import "./styling/home.css";
const Home = () =>{
    return(
        <div className="home">
            <section id="name"><h1>Shawn<br/>Morreau</h1></section>
            <h2 className="role anim-typewriter">Software Engineer<span className="line blink"> Jim</span></h2>
        </div>
    )
}
export default Home;