import React, { Component } from "react";

export default class MappedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InputText: "",
      ListItems: [],
    };
  }

  handleSubmit() {
    console.log("button pressed");
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="input here, separate items with a comma"
        ></textarea>
        <button onClick={this.handleSubmit}>Press</button>
        <h1>Your list:</h1>
      </div>
    );
  }
}

// Also see; https://www.freecodecamp.org/learn/front-end-libraries/react/use-array-map-to-dynamically-render-elements
