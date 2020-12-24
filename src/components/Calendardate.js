import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Calendardate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.date}</p>
      </div>
    );
  }
}
