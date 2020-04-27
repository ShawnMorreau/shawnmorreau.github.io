import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography"
import "./CardStyling.css";

export default function SkillDescription(props){
    return(
        <>
            <Typography className="content" variant="body1" component="p">
                {props.content}
            </Typography>
        </>
    );
}

SkillDescription.propTypes={
    content: PropTypes.string.isRequired,
}

