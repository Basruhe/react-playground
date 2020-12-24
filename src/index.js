import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// A list of testing Components
// sending props between components:
import Calendar from "./components/Calendar";
// passing an array as props:
import ToDo from "./components/ArrayAsProps/ArrayAsProps";

ReactDOM.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
