import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import PropTypes from "prop-types";
import Slider from "rc-slider";
import format from "format-number-with-string";

class DigbangSlider extends Component {
  changeValue = e => {
    const { min, max, changeValue } = this.props;
    let value = +e.target.value;
    if (value > max) value = max;
    if (value < min) value = min;
    changeValue(value);
  };
  render() {
    const { min, max, label, value, unit, changeValue } = this.props;
    return (
      <div>
        <Row className="slider-title" align="middle">
          <Col className="slider-text" span={6}>
            {label}
          </Col>
          <Col span={6} className="txar">
            <span className="input-container">
              <span className="input-unit">{unit || ""}</span>
              <input
                type="number"
                className="input"
                value={value}
                onChange={this.changeValue}
              />
            </span>
          </Col>
        </Row>
        <div className="slider">
          <Slider
            step={1}
            defaultValue={min}
            min={min}
            max={max}
            value={value}
            onChange={changeValue}
          />
        </div>
        <Row className="slider-limits">
          <Col span={6}>
            <span className="slider-text">{`${unit || ""}${format(
              min.toString(),
              "#.###,"
            )}`}</span>
          </Col>
          <Col className="txar" span={6}>
            <span className="slider-text">{`${unit || ""}${format(
              max.toString(),
              "#.###,"
            )}`}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

DigbangSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string,
  changeValue: PropTypes.func
};

export default DigbangSlider;
