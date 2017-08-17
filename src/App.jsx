import React, { Component } from 'react';
import Cell from './Cell';

class App extends Component {

  playerTurn() {
    this.setState({totalMoves: ++this.state.totalMoves});
    if(this.state.player === 'X') {
      this.setState({player: 'O'})
    } else if(this.state.player === 'O') {
      this.setState({player: 'X'})
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      totalMoves: 0,
      active: false,
      buttonText: '',
      player: 'X'
    };
    this.playerTurn = this.playerTurn.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">
          <h1>Tic Tac Toe</h1>
          <h2>Player {this.state.player}'s Turn</h2>
        </div>
        <div className="container">
          <div className="row">
            <Cell totalMoves={this.state.totalMoves} playerTurn={this.playerTurn} active={this.state.active} buttonText={this.state.buttonText}/>
            <Cell totalMoves={this.state.totalMoves} playerTurn={this.playerTurn} active={this.state.active} buttonText={this.state.buttonText}/>
            <Cell totalMoves={this.state.totalMoves} playerTurn={this.playerTurn} active={this.state.active} buttonText={this.state.buttonText}/>
          </div>
          <div className="row">
            <Cell totalMoves={this.state.totalMoves} playerTurn={this.playerTurn} active={this.state.active} buttonText={this.state.buttonText}/>
            <Cell totalMoves={this.state.totalMoves} playerTurn={this.playerTurn} active={this.state.active} buttonText={this.state.buttonText}/>
            <Cell totalMoves={this.state.totalMoves} playerTurn={this.playerTurn} active={this.state.active} buttonText={this.state.buttonText}/>
          </div>
          <div className="row">
            <Cell totalMoves={this.state.totalMoves} playerTurn={this.playerTurn} active={this.state.active} buttonText={this.state.buttonText}/>
            <Cell totalMoves={this.state.totalMoves} playerTurn={this.playerTurn} active={this.state.active} buttonText={this.state.buttonText}/>
            <Cell totalMoves={this.state.totalMoves} playerTurn={this.playerTurn} active={this.state.active} buttonText={this.state.buttonText}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
