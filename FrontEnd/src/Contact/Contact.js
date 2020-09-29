import React from "react";
import Logo from "../images/SM_logo.png";
import "./Contact.css";
import { Typography } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";

const phone = <FontAwesomeIcon icon={faPhoneAlt} />;
const mail = <FontAwesomeIcon icon={faEnvelope} />;
const location = <FontAwesomeIcon icon={faSearchLocation} />;

const Contact = (props) => {
  return (
    <div id="contactContainer">
      <img src={Logo} alt="Shawn Morreau's logo" className="logo"></img>
      <div id="callToAction">
        <Typography align="center" noWrap variant="h3" component="h1">
          Let's get in touch!
        </Typography>
        <hr />
        <Typography align="center" component="p" id="desc">
          Do you have something you'd like for me to build? Want to work
          together or learn more about my projects? You can contact me by
          filling out the form below or via phone or email and I'll get back to
          you shortly!
        </Typography>
        <form id="inputs">
          <label htmlFor="Name">Name</label>
          <input type="text" name="name" placeholder="Name" required />
          <br />
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="example@example.com" required />
          <br />

          <label htmlFor="message">Message</label>
          <textarea type="text" name="message" placeholder="Enter your message here" required />
          <br />
          <button>Send &gt;</button>
        </form>
      </div>
      <div id="info">
        <span>{phone} 1 519 466 7795</span>
        <br />
        <span>{mail} shawn.morreau@gmail.com</span>
        <br />
        <span>{location} Sarnia, Ontario</span>
      </div>
    </div>
  );
};

export default Contact;
