import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Me from "./img/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdobe } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
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
            <h2>UX/UI Specialist</h2>
          </div>
          <div className="about-card">
            <div className="about-text-wrapper">
              <div className="about-text">
                <h2>Hi, I'm Sarah.</h2>
                <p>
                  I am a UX/UI designer and developer in Prague. You may see me
                  people-watching at a cafe or reading a book in one of our many
                  parks when not coding.
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
              <a href="https://www.adobe.com/">
                <FontAwesomeIcon icon={faAdobe} className="icon" />
              </a>
              <a href="https://www.figma.com/">
                <FontAwesomeIcon icon={faFigma} className="icon" />
              </a>
              <a href="https://sass-lang.com/">
                <FontAwesomeIcon icon={faSass} className="icon" />
              </a>
              <a href="https://getbootstrap.com/">
                <FontAwesomeIcon icon={faBootstrap} className="icon" />
              </a>
              <a href="https://www.php.net/">
                <FontAwesomeIcon icon={faPhp} className="icon" />
              </a>
              <a href="https://laravel.com/">
                <FontAwesomeIcon icon={faLaravel} className="icon" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <FontAwesomeIcon icon={faJs} className="icon" />
              </a>
              <a href="https://reactjs.org/">
                <FontAwesomeIcon icon={faReact} className="icon" />
              </a>
              <a href="https://github.com/tullyyy">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="https://git-scm.com/">
                <FontAwesomeIcon icon={faGitAlt} className="icon" />
              </a>

              {/* <FontAwesomeIcon icon={faNodeJs} className="icon" /> */}
            </footer>
          </div>
        </div>
      </Fade>
    );
  }
}

export default About;
