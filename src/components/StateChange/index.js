import React, { Component } from "react";

class StateChange extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 0 };
  }
  colorChange = () => {
    this.setState((prevColor) => ({ color: prevColor.color + 1 }));
  };
  resetColor = () => {
    this.setState(() => ({ color: 0 }));
  };
  render() {
    const { color } = this.state;
    return (
      <div>
        <h1> my favourite colour is {color}.</h1>
        <button onClick={this.colorChange}>onchange</button>
        <button onClick={this.resetColor}>resetcolor</button>
      </div>
    );
  }
}
export default StateChange;
