import React, { Component } from "react";
import Nemo from "./img/nemo.png";
import Momentum from "./img/momentum.png";
import GHC from "./img/ghc.png";
import BKG from "./img/bkg.png";
import Tables from "./img/tables.png";
import Port from "./img/portfolio.png";
// import Momentum from "./img/momentum.png";

import Fade from "react-reveal/Fade";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <Fade top>
        <div className="portfolio-container">
          <div className="portfolio-hero">
            <h1>Projects</h1>
          </div>
          <div className="portfolio-cards">
            <Fade left>
              <div className="portfolio-card">
                <div className="portfolio-title">
                  <h2>Momentum Clone</h2>
                </div>
                <div className="portfolio-image">
                  <img src={Momentum} alt="" />
                </div>

                <div className="portfolio-text">
                  <p className="portfolio-description">
                    A clone of the productivity app. Fully functional,
                    connecting to a database
                  </p>
                  <p className="portfolio-techstack">
                    <strong>Tech Stack:</strong> ReactJS (JavaScript), Laravel
                    (PHP), SQL (PHPMyAdmin), HTML, SCSS (CSS)
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="portfolio-card">
                <div className="portfolio-title">
                  <h2>Portfolio</h2>
                </div>
                <div className="portfolio-image">
                  <img src={Port} alt="" />
                </div>

                <div className="portfolio-text">
                  <p className="portfolio-description">
                    This page! Check out what I've done here.
                  </p>
                  <p className="portfolio-techstack">
                    <strong>Tech Stack:</strong> ReactJS (JavaScript), HTML,
                    SCSS (CSS)
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="portfolio-card">
                <div className="portfolio-title">
                  <h2>Generic Hipster Coffee</h2>
                </div>
                <div className="portfolio-image">
                  <img src={GHC} alt="" />
                </div>

                <div className="portfolio-text">
                  <p className="portfolio-description">
                    A full website for a generic coffee shop with various pages
                    (Home, Coffee, Menu, Story)
                  </p>
                  <p className="portfolio-techstack">
                    <strong>Tech Stack:</strong> HTML, SCSS (CSS)
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="portfolio-card">
                <div className="portfolio-title">
                  <h2>Belfast Kindergarten</h2>
                </div>
                <div className="portfolio-image">
                  <img src={BKG} alt="" />
                </div>

                <div className="portfolio-text">
                  <p className="portfolio-description">
                    The homepage for a kindergarten, divided into sections such
                    as "About Us" and "Employees"
                  </p>
                  <p className="portfolio-techstack">
                    <strong>Tech Stack:</strong> HTML, SCSS (CSS)
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="portfolio-card">
                <div className="portfolio-title">
                  <h2>Tables</h2>
                </div>
                <div className="portfolio-image">
                  <img src={Tables} alt="" />
                </div>

                <div className="portfolio-text">
                  <p className="portfolio-description">
                    A small project to show gradients and recreate data tables
                  </p>
                  <p className="portfolio-techstack">
                    <strong>Tech Stack:</strong> HTML, CSS
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="portfolio-card">
                <div className="portfolio-title">
                  <h2>Nemo's Personal Website</h2>
                </div>
                <div className="portfolio-image">
                  <img src={Nemo} alt="" />
                </div>

                <div className="portfolio-text">
                  <p className="portfolio-description">
                    Portfolio page for my cat Nemo, the Destroyer
                  </p>
                  <p className="portfolio-techstack">
                    <strong>Tech Stack:</strong> HTML, SCSS (CSS)
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Portfolio;
