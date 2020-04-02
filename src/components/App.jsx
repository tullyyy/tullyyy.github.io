import React, { Component } from "react";
import "../styles/App.scss";
import PortfolioToggle from "./portfolio/PortfolioToggle";
import AboutToggle from "./about/AboutToggle";
import Contact from "./contact/Contact";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";

class App extends Component {
  constructor() {
    super();

    this.state = {
      showAbout: true
    };
  }

  handlePortfolioClicked = e => {
    this.setState({ showAbout: false });
  };

  handleAboutClicked = e => {
    e.preventDefault();
    this.setState({ showAbout: true });
  };

  handlePortfolioSubmit = () => {
    this.setState({
      showAbout: false
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.showAbout ? (
          <>
            <PortfolioToggle
              handleClick={this.handlePortfolioClicked}
              handleSubmit={this.handlePortfolioSubmit}
            />
            <About />
            <AboutToggle handleClick={this.handleAboutClicked} />
            <Contact />
          </>
        ) : (
          <>
            <PortfolioToggle
              handleClick={this.handlePortfolioClicked}
              handleSubmit={this.handlePortfolioSubmit}
            />
            <Portfolio />
            <AboutToggle handleClick={this.handleAboutClicked} />
            <Contact />
          </>
        )}
      </div>
    );
  }
}

export default App;
