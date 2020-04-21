import React from "react";
import Skill from "./Skill.js";

export default class extends React.Component {
    state = {
        cards: [{
            key: 0,
            title: "Web Development",
            skills: [{ key: 0, value: "React" }, { key: 1, value: "SCSS" }],
        },
        {
            key: 1,
            title: "Personal",
            skills: [{ key: 0, value: "Loving Jaymee" }],
        },
        {
            key: 2,
            title: "Anotha One",
            skills: [{ key: 0, value: ["being big op"] }],
        },
        ],
    }

    render() {
        return (
            <>
            <div className="container">
                {this.state.cards.map(x => (
                    <Skill 
                        key={x.key}
                        title={x.title}
                        skills={x.skills}
                    />
                ))}
            </div>
            </>
        );
    }
}