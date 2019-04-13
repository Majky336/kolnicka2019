import React, { Component } from "react";

import "./InputField.css";

class InputField extends Component {
  render() {
    const { label, id, value, onChange } = this.props;

    return (
      <div className="input-wrapper">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} value={value} onChange={onChange} />
      </div>
    );
  }
}

export default InputField;
