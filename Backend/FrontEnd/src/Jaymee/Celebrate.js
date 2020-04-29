import React from "react";
import firework1 from "./imageGallery/fireworks1.gif";
import firework2 from "./imageGallery/fireworks2.gif";
import firework3 from "./imageGallery/fireworks3.gif";
import Writing from "./Writing/Writing.json";
import Messages from "./WritingContainer.js";
import ImageWheel from "./ImageWheel.js";
import cake1 from "./imageGallery/tinified/cake.jpg";
import Pagination from "./Pagination.js";

import "./Styling/Styling.css";
export default function Celebrate() {
    const message = Writing.message1.split(" ");
    const [page, setPage] = React.useState(0);

    const updatePage=(number)=>{
        setPage(number);
    }
    if (page === 0) {
        return (
            <div id="celebration">
                <div className="messages">
                    <h1>{message[0]}</h1>
                    <h1>{message[1]}</h1>
                    <h1>{message[2]}</h1>
                </div>
                <div className="message2">
                    <Messages
                        stuff={Writing}
                    />
                </div>
                <div className="imageWheel">
                    <ImageWheel />
                </div>
                <div className="page">
                    <Pagination
                        active={page}
                        update={updatePage}
                    />
                </div>

            </div>
        );
    } else {
        return (
            <div id="cake">
                <img src={cake1} alt="" />
                <p>{Writing.message2}</p>
                <p>{Writing.closing}</p>

            </div>
        );
    }

}