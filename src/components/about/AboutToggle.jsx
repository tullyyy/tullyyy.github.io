import React, { Component } from "react";

class AboutToggle extends Component {
  render() {
    return (
      <div className="about-toggle-wrapper">
        <div className="about-toggle-container">
          <span
            onClick={this.props.handleClick}
            className="about-toggle button-toggle"
          >
            About
          </span>
        </div>
      </div>
    );
  }
}

export default AboutToggle;
