import React, { Component } from "react";
import { Row, Col } from "react-simple-flex-grid";
import PropTypes from "prop-types";

class DigbangSimulatorFooter extends Component {
  render() {
    const { monthlyFee } = this.props;

    return (
      <div>
        <Row className="footer-total" align="middle">
          <Col className="txac" span={6}>
            <h4>COUTA FIJA POR MES</h4>
          </Col>
          <Col className="txac" span={6}>
            <h1>{`$ ${monthlyFee}`}</h1>
          </Col>
        </Row>
        <Row className="footer-options">
          <Col span={8}>
            <button className="footer-credito">OBTENÉ CRÉDITO</button>
          </Col>
          <Col span={4}>
            <button className="footer-detalles">VER DETALLE DE CUOTAS</button>
          </Col>
        </Row>
      </div>
    );
  }
}

DigbangSimulatorFooter.propTypes = {
  monthlyFee: PropTypes.string
};

export default DigbangSimulatorFooter;
