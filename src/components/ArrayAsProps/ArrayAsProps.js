import React, { Component } from "react";

let tasks = ["shopping", "walking", "cleaning"];
let tasks2 = ["cooking", "writing", "vacuum", "make call"];

export default class Calendar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>

        <h2> Today </h2>
        <List tasks={["cooking", "writing", "vacuum", "make call"]} />
        <h2> Tomorrow </h2>
        <List tasks={["shopping", "walking", "cleaning"]} />
      </div>
    );
  }
}

const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>;
};
