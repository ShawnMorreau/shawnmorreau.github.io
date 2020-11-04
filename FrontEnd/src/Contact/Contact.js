import React, { useState } from "react";
import Logo from "../images/logo.png";
import "./Styling/Contact.css";
import { Typography} from "@material-ui/core/";
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
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
      window.location.href = `mailto:shawn.morreau@gmail.com?subject=Work%20Inquiry%20${subject}&body=${message}`;
    setSubject("");
    setMessage("");
  };
  return (
    <div id="contactContainer">
      <img src={Logo} alt="Shawn Morreau's logo" className="logo"></img>
      <div id="callToAction">
        <Typography
          align="center"
          noWrap
          variant="h3"
          component="h1"
          className="titles"
        >
          Let's get in touch!
        </Typography>
        <hr />
        <Typography align="center" component="p" id="desc" className="content">
          Do you have something you'd like for me to build? Want to work
          together or learn more about my projects? You can contact me by
          filling out the form below or via phone or email and I'll get back to
          you shortly!
        </Typography>
        <form
          id="inputs"
          autoComplete="off"
          onSubmit={submitForm}
        >
          <label htmlFor="Name" className="titles">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="content"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <br />

          <label htmlFor="message" className="titles">
            Message
          </label>
          <textarea
            type="text"
            name="body"
            placeholder="Enter your message here"
            className="content"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />

          <button className="titles">
            Send &gt;
          </button>
        </form>
      </div>
      <div id="info" className="content">
        <span>{phone} 1 519 466 7795</span>
        <br />
        <span>{mail} shawn.morreau@gmail.com</span>
        <br />
        <span>{location} Sarnia, Ontario</span>
      </div>
      <div id="backgroundImg"></div>
    </div>
  );
};

export default Contact;
