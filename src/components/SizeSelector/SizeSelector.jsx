import PropTypes from "prop-types";
import React, { Component } from "react";
import "./SizeSelector.css";

export class SizeSelector extends Component {
  state = {};

  render() {
    const { selected, onChange, text, value } = this.props;
    return (
      <div
        onClick={() => {
          onChange(value);
        }}
      >
        <div className={`size-type ${value !== selected && "unselected"}`}>
          {text}
        </div>
      </div>
    );
  }
}

SizeSelector.propTypes = {
  text: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
