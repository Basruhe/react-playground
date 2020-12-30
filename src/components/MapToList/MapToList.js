import React, { Component } from "react";

export default class MappedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InputText: "",
      ListItems: [],
    };
  }
  render() {
    return <h1>Nothing yet</h1>;
  }
}

// class MyToDoList extends React.Component {
//   constructor(props) {
//     super(props);
//     // Change code below this line
// this.state = {
//   userInput: '',
//   toDoList: [],
// }

// Also see; https://www.freecodecamp.org/learn/front-end-libraries/react/use-array-map-to-dynamically-render-elements
