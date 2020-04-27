import React from "react";
import SkillContainerV1 from "./SkillContainerV1.js";
import "./CardStyling.css";
import Content from "./Content.json";
export default class extends React.Component {
    state = {
        cards: [{
            key: 0,
            title: "Web Development",
            skills: [
                { key: 0, value: "React", content:Content.react}, 
                { key: 1, value: "SCSS",content :Content.SCSS }
            ],
            active:{}
        },
        {
            key: 1,
            title: "Personal",
            skills: [
                { key: 0, value: "Jaymee" , content:Content.jaymee}
            ],
            active:{}
        },
        {
            key: 2,
            title: "Anotha One",
            skills: [
                { key: 0, value: "being big op", content:Content["big op"]}
            ],
            active:{},
        },
        ],
    }
    //look into if there's a better way of doing this?
    getSkillObjectFromState=(name)=>{
        let val= this.state.cards.map(x=>
            x.skills.filter(element => 
                element.value === name
            )
        );
        val = val.filter(item => item.length!==0)
        return val[0][0];
    }
    getSkillCard=(key)=>{
        return this.state.cards[key];
    }
    clearActive=(key)=>{
        const cardSelected=this.state.cards[key].active;
        this.setState({[cardSelected]:{}})
    }
    getCardIndex=(obj)=>{
        const selectedCard = this.state.cards.filter((x,i)=>(
            x.skills.includes(obj)
        ));
        return (selectedCard[0].key);
    }
    updateActive=(name)=>{
        const skillObject = this.getSkillObjectFromState(name);
        const cardIndex = this.getCardIndex(skillObject);
        this.clearActive(cardIndex);

        
        let newState = Object.assign({},this.state);
        newState.cards[cardIndex].active = skillObject;
        this.setState(newState);
    }
    render() {
        const card = this.state.cards.map((skill,i)=>(
            <SkillContainerV1
                key={i}
                title={skill.title}
                skills={skill.skills}
                active={skill.active}
                updateActive={this.updateActive}
            />
        ));
        return (
            <div className="cardSpace">
            <div className ="cardContainer">
                    {card}
            </div>
            </div>
        );
    }
}