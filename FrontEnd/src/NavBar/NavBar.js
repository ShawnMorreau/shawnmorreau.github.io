import React from "react";
import "./Styling/NavBar.css";
import {Link} from "react-router-dom";
import Logo from "../images/filledLogo.svg";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "../SocialMedia/SocialIcon";

const socials = [
  {
      "icon": <FontAwesomeIcon icon={faLinkedin} />,
      "url": "https://www.linkedin.com/in/shawnmorreau/"
  },
  {
      "icon": <FontAwesomeIcon icon={faGithub} />,
      "url": "https://www.github.com/ShawnMorreau"
  }
]
  const socialIcons = socials.map((social,i)=>
          <SocialIcon
              icon={social.icon}
              url={social.url}
              key={`${i} key`}
              idx={i}
          />
      );
const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <li id="homeLI"><Link to="/" id="home"><img id="logo" src={Logo} alt=""/></Link></li>
        <div className="links">
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/skills/">Skills+Certifications</Link></li>
          <li><Link to="/project/">Projects</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
          {socialIcons}
        </div>
      </ul>
    </div>
  );
};
export default NavBar;
