import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Button.css";

class Button extends Component {
  render() {
    const { label, onClick, to } = this.props;

    if (to) {
      return (
        <Link className="link-wrapper" to={to}>
          {label}
        </Link>
      );
    }

    return (
      <button className="button-wrapper" onClick={onClick}>
        {label}
      </button>
    );
  }
}

export default Button;
