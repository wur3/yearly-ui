import React, {Component} from 'react';
import './Day.css';

interface Events {
    month: number,
    day: number,
    desc: string;
};

var classNames = require('classnames');

export class Day extends Component<{val: number, events: Events[]},{}> {
  state = {
      'isSpecial': false
  };
  render(){
    var dayClass = classNames({
      'Day': true,
      // 'highlight': this.state.isSpecial
      'highlight': (this.props.events.length > 0)
    });
    return (
      <div className={dayClass}>
        {this.props.val}
      </div>
    );
  }
}

export default Day;
