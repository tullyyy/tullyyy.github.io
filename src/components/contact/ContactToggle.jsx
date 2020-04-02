import React, { Component } from "react";
import Contact from "./Contact";

class ContactToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContactCard: false
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        showContactCard: !prevState.showContactCard
      };
    });
  };

  render() {
    return (
      <div className="contact-toggle-wrapper">
        <div className="contact-toggle-container">
          {this.state.showContactCard && <Contact />}

          <span
            onClick={this.handleClick}
            className="contact-toggle  button-toggle"
          >
            Contact
          </span>
        </div>
      </div>
    );
  }
}

export default ContactToggle;
