import React from "react";
import SkillContainerV1 from "./SkillContainerV1.js";
import "./CardStyling.css";
export default class extends React.Component {
    state = {
        cards: [{
            key: 0,
            title: "Web Development",
            skills: [{ key: 0, value: "React", content:"blah"}, { key: 1, value: "SCSS",content :"aha" }],
            active:{}
        },
        {
            key: 1,
            title: "Personal",
            skills: [{ key: 0, value: "Loving Jaymee" , content:"and Jaymee loves me"}],
            active:{}
        },
        {
            key: 2,
            title: "Anotha One",
            skills: [{ key: 0, value: "being big op", content:"biiiig op"}],
            active:{},
        },
        ],
    }
    //look into if there's a better way of doing this?
    getSkillObjectFromState=(name)=>{
        const val= this.state.cards.map(x=>
            x.skills.filter(element => 
                element.value === name
            )
        );
    }

    updateActive=(name)=>{
        const skillObject = this.getSkillObjectFromState(name);
        this.setState({active: skillObject});
    }
    render() {
        const card = this.state.cards.map(skill=>(
            <SkillContainerV1
                title={skill.title}
                skills={skill.skills}
                active={skill.active}
                updateActive={this.updateActive}
            />
        ));
        return (
            
            <div className ="cardContainer">
                    {card}
            </div>
        );
    }
}