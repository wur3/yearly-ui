import React, {Component} from 'react';
import './Day.css';


export class Day extends Component<{val: number},{}> {
  render(){
    return (
      <div className="Day">
        <p>{this.props.val}</p>
      </div>
    );
  }
}

export default Day;
