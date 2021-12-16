import React, { Component } from "react";
import "./App.css";
import Apparts from "./components/Apparts/Apparts";
import { Clock,  Api } from "./containers";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navig />} />
              <Route path="homes" element={<Apparts />} />
              <Route path="clock" element={<Clock />} />
              <Route path="api" element={<Api />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

function Navig() {
  return (
    <>
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
        to="homes"
      >
        Apparts
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
        to="clock"
      >
        Clock
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
        to="api"
      >
        Api
      </NavLink>
    </>
  );
}

export default App;
