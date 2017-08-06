import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);

    this.state={count: 0};

    this.buttonClick.bind(this);
  }

  buttonClick() {
    this.setState({count: this.state.count+1});
    console.log(this.count);
  }

  render() {
    return(
        <button type="button" className="btn btn-primary indiv-cell" onClick={this.buttonClick}>
          Button</button>
      );
    }
  }

  export default Cell;
