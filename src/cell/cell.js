import React, { Component} from 'react';

class cell extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''}
  }

  render(){
    return (
      <div>
        <btn onChange={event => {this.setState(console.log(test))}}/>
      </div>
    );
  }
}
export default cell;
