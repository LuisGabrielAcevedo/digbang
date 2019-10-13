import React, { Component } from "react";
import DigbangSlider from "./digbang-slider";
import DigbangSimulatorFooter from "./digbang-simulator-footer";
import format from "format-number-with-string";

class DigbangSimulator extends Component {
  state = {
    totalAmount: 5000,
    term: 3
  };

  changeTotalAmount(totalAmount) {
    this.setState({ totalAmount });
  }

  changeTotalTerm(term) {
    this.setState({ term });
  }

  render() {
    const { totalAmount, term } = this.state;
    let monthlyFee = (totalAmount / term).toFixed(2);
    const motlyFeeSplit = monthlyFee.split(".");
    monthlyFee = [format(motlyFeeSplit[0], "#,###."), motlyFeeSplit[1]].join(
      "."
    );
    return (
      <div className="box">
        <h2 className="txac">Simulá tu crédito</h2>
        <DigbangSlider
          label={"MONTO TOTAL"}
          min={5000}
          max={50000}
          value={totalAmount}
          unit={"$"}
          changeValue={totalAmount => this.changeTotalAmount(totalAmount)}
        />
        <DigbangSlider
          label={"PLAZO"}
          min={3}
          max={24}
          value={term}
          changeValue={term => this.changeTotalTerm(term)}
        />
        <DigbangSimulatorFooter monthlyFee={monthlyFee} />
      </div>
    );
  }
}

export default DigbangSimulator;
