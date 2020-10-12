import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-container">
        <a
          href="http://www.linkedin.com/in/tullyyy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin-icon" />
        </a>

        <a
          href="http://github.com/tullyyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>

        <a
          href="https://www.behance.net/tullyyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBehance} className="icon behance-icon" />
        </a>

        <a
          href="mailto:sehtully@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon envelope-icon" />
        </a>
      </div>
    );
  }
}

export default Contact;
