import React from "react";
import "./Blog.css";
export default function Blog(props){
    const deletePost=()=>{
        props.deletePost(props.id);
    }
    return(
        <div>
            <>
                <p>{props.title}</p>
                <p>{props.content}</p>
                <p>{props.id}</p>
            </>
            <button onClick={deletePost}>X</button>
        </div>
    );
}