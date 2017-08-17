import React, { Component } from 'react';

class Cell extends Component {

  clicked() {
    let active = !this.state.active;
    this.setState({active: active})
    this.props.playerTurn(active ? this.props.totalMoves : '');
    console.log(this.props.totalMoves);
    if(this.props.totalMoves % 2 === 0) {
      this.setState({buttonText: 'X'});
      this.setState({classText: 'cell-x'})
    } else if(this.props.totalMoves % 2 === 1) {
      this.setState({buttonText: 'O'});
      this.setState({classText: 'cell-o'})
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      buttonText: '',
      classText: 'cell-btn'
    };
  }
  render() {
    return (
      <button className={this.state.classText} onClick={() => this.clicked()} disabled={this.state.active}>{this.state.buttonText}</button>
    );
  }
}

export default Cell;
