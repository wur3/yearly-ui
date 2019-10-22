import React, {Component} from 'react';
import './Day.css';


export class Day extends Component<{val: number},{}> {
  render(){
    return (
      <div className="Day">
        {this.props.val}
      </div>
    );
  }
}

export default Day;
