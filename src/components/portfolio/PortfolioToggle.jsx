import React, { Component } from "react";

class PortfolioToggle extends Component {
  render() {
    return (
      <div
        className="portfolio-toggle-wrapper"
        onClick={this.props.handleClick}
      >
        <div
          className="portfolio-toggle-container"
          onClick={this.props.handleClick}
        >
          <span
            onClick={this.props.handleClick}
            className="portfolio-toggle button-toggle"
          >
            Portfolio
          </span>
        </div>
      </div>
    );
  }
}

export default PortfolioToggle;
