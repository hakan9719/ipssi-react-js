import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

// import Button from "./components/Button/Button";
import {Button, Item} from "./components";
class App extends Component {
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        
        <Button>Submit</Button>

        
        <Item title='Appartement' status='Libre' description="Appartement dans le 16ème !!"/>
        <Item title='Appartement' status='Libre' description="Appartement dans le 16ème !!"/>
        <Item title='Appartement' status='Dispo' description="Appartement dans le 16ème !!"/>


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
    )};
}

export default App;
