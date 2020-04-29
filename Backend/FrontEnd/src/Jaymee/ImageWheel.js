import React from "react";
import wine from "./imageGallery/wine.jpg";
import cake2 from "./imageGallery/tinified/cake2.png";
import cute1 from "./imageGallery/tinified/cute.jpg";
import cute2 from "./imageGallery/tinified/cute2.jpg";
import cute3 from "./imageGallery/tinified/cute3.jpg";
import cute4 from "./imageGallery/tinified/cute4.png";
import cute5 from "./imageGallery/tinified/cute5.png";
import cute6 from "./imageGallery/tinified/cute6.png";
import cute7 from "./imageGallery/tinified/cute7.jpg";
import cute8 from "./imageGallery/tinified/cute8.jpg";
import cute9 from "./imageGallery/tinified/cute9.jpg";
import cute10 from "./imageGallery/tinified/cute10.jpg";
import cute11 from "./imageGallery/tinified/cute11.jpg";
import toronto1 from "./imageGallery/tinified/toronto.jpg";
import toronto2 from "./imageGallery/tinified/toronto2.jpg";
import ImageContainer from "./ImageContainer.js";


export default function ImageWheel(){
    const images=[wine,cute1,cute2,cute3,cute4,cute5,cute6,cute7,cute8,cute9,cute10,cute11,toronto1,toronto2];
    const imgCards = images.map(x=>(
        <ImageContainer
            src={x}
        />
    ));
    return(
        <div className="imageContainer">
            {imgCards}
        </div>
    );
}