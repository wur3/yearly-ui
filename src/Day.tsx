import React, {Component} from 'react';
import './Day.css';

var classNames = require('classnames');
export class Day extends Component<{val: number},{}> {
  state = {
      'isSpecial': false
  };
  render(){
    var dayClass = classNames({
      'Day': true,
      // 'highlight': this.state.isSpecial
      'highlight': (this.props.val===2)
    });
    return (
      <div className={dayClass}>
        {this.props.val}
      </div>
    );
  }
}

export default Day;
