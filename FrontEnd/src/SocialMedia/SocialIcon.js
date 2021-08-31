import React from "react";
import "./Styling/socialMedia.css";
const SocialIcon = (props) => {
  const {url, icon } = props;
  return (
    <li>
      <a
        href={url}
        target="_blank" rel="noopener noreferrer">
        <div className="socialIcon">{icon}</div>
      </a>
    </li>
  );
};

export default SocialIcon;
