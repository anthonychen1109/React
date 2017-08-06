import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './cell/cell';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tic Tac Toe</h1>
          <div className="row grid">
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className="row grid">
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className="row grid">
            <Cell />
            <Cell />
            <Cell />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
