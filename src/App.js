import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Filter, List } from "./components";
import { Clock, Form } from "./containers";

import data from './data.json'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtred: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({filtred : e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Filter handleChange={this.handleChange}></Filter> 
          {/* <Form></Form> */}
          <Clock></Clock>
          <List elementFilter={this.state.filtred} data={data} />

        </header>
      </div>
    );
  }
}

export default App;
