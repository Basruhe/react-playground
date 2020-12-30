import React, { Component } from "react";

export default class MappedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputByUser: "",
      groceryList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const itemsArray = this.state.inputByUser.split(",");
    this.setState({
      groceryList: itemsArray,
    });
  }
  handleChange(e) {
    this.setState({
      inputByUser: e.target.value,
    });
  }

  render() {
    const items = this.state.groceryList.map((item) => <li>{item}</li>);
    return (
      <div>
        <p>Input groceries</p>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="Separate your groceries with commas"
        />
        <br />
        <button onClick={this.handleSubmit}>
          Press to create grocery list
        </button>
        <p>Your Grocery list:{items}</p>
      </div>
    );
  }
}

// Also see; https://www.freecodecamp.org/learn/front-end-libraries/react/use-array-map-to-dynamically-render-elements
