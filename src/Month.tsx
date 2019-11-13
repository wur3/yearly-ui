import React, {Component} from 'react';
import './Month.css';
import Day from './Day';

interface Events {
    month: number,
    day: number,
    desc: string;
};

interface Props {
  name: string, 
  id: number, 
  days: number, 
  events: Events[], 
  sendMonthDay: Function
}

interface States {}

export class Month extends Component<Props,States> {

  constructor(name: string, id: number, days: number, events: Events[], sendMonthDay: Function) {
    super({name, id, days, events, sendMonthDay});
    this.recieveDay = this.recieveDay.bind(this);
  }

  recieveDay(day: number) {
    this.props.sendMonthDay(this.props.id, day)
  }

  render(){
    return (
      <table className="Month">
        <thead className="MonthHeader">
          <tr>
            <td colSpan={7}>{this.props.name}</td>
          </tr>
        </thead>
        <tbody>
          {this.renderDays()}
        </tbody>
      </table>
    );
  }
  renderDays(){
    return Array(this.props.days).fill('').map((val, id)=> {
      if (id % 7 === 0) {
        return (
          <tr key={id/7}>
            {Array(7).fill('').map((val, i)=> {
              if (id+i+1 > this.props.days) return null;
              return (
                <td><Day val={id+i+1} events={this.props.events.filter((event: Events) => event.day === id+i+1)} sendDay={this.recieveDay}/></td>
              )
            })}
          </tr>
        );
      }
      return null;
    });
  }
}

export default Month;
