import React, {Component} from 'react';
import './Day.css';

interface Events {
    month: number,
    day: number,
    desc: string;
};

interface Props {
  val: number, 
  events: Events[], 
  sendDay: Function
};

interface States {};

var classNames = require('classnames');

export class Day extends Component<Props,States> {
  render(){
    var dayClass = classNames({
      Day: true,
      highlight: (this.props.events.length > 0)
    });
    return (
      <div className={dayClass} onClick={() => this.props.sendDay(this.props.val)}>
        {this.props.val}
      </div>
    );
  }
}

export default Day;
