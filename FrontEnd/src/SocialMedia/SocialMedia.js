import React, {useState} from "react";
import "./Styling/socialMedia.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "./SocialIcon";
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
const SocialMedia = props => {
    const socialIcons = socials.map((social,i)=>
            <SocialIcon
                icon={social.icon}
                url={social.url}
                key={`${i} key`}
                idx={i}
            />
        );
    const [isOpen, setIsOpen] = useState(false);
    const toggleSocials = e => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    return(
        <div>
            
        </div>
        
    );
}

export default SocialMedia;