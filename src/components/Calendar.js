import React, { Component } from "react";
import Calendardate from "./Calendardate";

// Testing sending props between components, State

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "today",
    };
  }

  render() {
    return (
      <div>
        <h2>test</h2>
        <p> Date (from state) should say: {this.state.date}</p>
        <p> Date (through props):</p> <Date date={this.state.date} />
      </div>
    );
  }
}

// stateless functional component
class Date extends Component {
  render() {
    return (
      <div>
        <Calendardate date={this.props.date} />
      </div>
    );
  }
}
