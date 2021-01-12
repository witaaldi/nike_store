import PropTypes from "prop-types";
import React, { Component } from "react";
import "./ColorSelector.css";

export class ColorSelector extends Component {
  state = {};

  render() {
    const { selected, onChange, color, value } = this.props;
    return (
      <div
        onClick={() => {
          onChange(value);
        }}
      >
        <div
          className={`color-type ${value !== selected && "unselected"}`}
          style={{ backgroundColor: color }}
        ></div>
      </div>
    );
  }
}

ColorSelector.propTypes = {
  color: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
