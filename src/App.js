import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import Button from "./components/Button/Button";
import List from "./components/List";
// import { Clock } from "./components";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFilter: "",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <input
            onChange={(e) => this.setState({ inputFilter: e.target.value })}
            type="text"
            name=""
            id=""
          />
          {/* <Clock/> */}
          <List elementFilter={this.state.inputFilter} />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
