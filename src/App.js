import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './cell/cell';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="player-turn">
          <header>
            <h2>
              Player 1's Turn
            </h2>
          </header>
        </div>
        <div className="grid">
          <div className="row">
            <div className="col cell btn btn-primary"><cell /></div>
            <div className="col cell btn btn-primary">2</div>
            <div className="col cell btn btn-primary">3</div>
          </div>
          <div className="row">
            <div className="col cell btn btn-primary">4</div>
            <div className="col cell btn btn-primary">5</div>
            <div className="col cell btn btn-primary">6</div>
          </div>
          <div className="row">
            <div className="col cell btn btn-primary">7</div>
            <div className="col cell btn btn-primary">8</div>
            <div className="col cell btn btn-primary">9</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
