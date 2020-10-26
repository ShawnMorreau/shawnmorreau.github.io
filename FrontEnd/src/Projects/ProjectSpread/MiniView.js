import React from "react";

const MiniView = (props) => {
    const {name, handleClick} = props;
  return <div id="project" onClick={handleClick}>{name}</div>;
};

export default MiniView;
