import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Me from "./img/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
// import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
// import { faNodeJs } from "@fortawesome/free-brands-svg-icons";

class About extends Component {
  state = {};
  render() {
    return (
      <Fade bottom>
        <div className="about-container">
          <div className="about-hero">
            <h1>Sarah Tully</h1>
            <h2>Full-stack web developer</h2>
          </div>
          <div className="about-card">
            <div className="about-text-wrapper">
              <div className="about-text">
                <h2>Hi, I'm Sarah.</h2>
                <p>
                  I am a developer in Prague, CZ. You may see me people-watching
                  at a cafe or reading a book in one of our many parks when not
                  coding.
                </p>
                <p>
                  I am passionate about simple, elegant design structures and
                  impactful visuals. I want to make the user experience as
                  accessible, responsive and thoughtful as possible.
                </p>
                <p>
                  Feel free to reach out. Together, we can bring your ideas to
                  life in code and design.
                </p>
              </div>
              <img src={Me} alt="Tully, the developer of this website" />
            </div>

            <footer className="about-footer">
              {/* <FontAwesomeIcon icon={faHtml5} className="icon" />
              <FontAwesomeIcon icon={faCss3Alt} className="icon" /> */}
              <FontAwesomeIcon icon={faSass} className="icon" />
              <FontAwesomeIcon icon={faBootstrap} className="icon" />
              <FontAwesomeIcon icon={faPhp} className="icon" />
              <FontAwesomeIcon icon={faLaravel} className="icon" />
              <FontAwesomeIcon icon={faJs} className="icon" />
              <FontAwesomeIcon icon={faReact} className="icon" />
              <FontAwesomeIcon icon={faGithub} className="icon" />
              <FontAwesomeIcon icon={faGitAlt} className="icon" />

              {/* <FontAwesomeIcon icon={faNodeJs} className="icon" /> */}
            </footer>
          </div>
        </div>
      </Fade>
    );
  }
}

export default About;
