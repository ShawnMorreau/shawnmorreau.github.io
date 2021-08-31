import React from "react";

const MiniView = (props) => {
  const {name, handleClick,active, id} = props;
  return <div id="project" className={active===id ? "active content":"content"} onClick={handleClick}>
    {name}
    </div>;
};

export default MiniView;
