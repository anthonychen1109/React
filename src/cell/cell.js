import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);

    this.state={count: 0};

    this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log("test");
  }

  render() {
    return(
        <button type="button" className="btn btn-primary indiv-cell" onClick={this.buttonClick}>
          Button</button>
      );
    }
  }

  export default Cell;
