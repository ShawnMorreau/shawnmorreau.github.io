import React from "react";
import Button from "@material-ui/core/Button";
export default function Pagination(props){
    const updatePage=(e)=>{
        props.update(e.target.innerHTML);
    }
    return(
        <div className="bar">
            <Button onClick={updatePage} className="selection">1</Button>
        </div>
    );
}