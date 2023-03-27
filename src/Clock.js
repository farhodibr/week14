import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <p>Current time is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}


const array = [1, 2, 3, 4]