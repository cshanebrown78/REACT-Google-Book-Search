import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
