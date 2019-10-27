import React, {Component} from 'react';
import './Month.css';
import Day from './Day';

interface Events {
    month: number,
    day: number,
    desc: string;
};

export class Month extends Component<{name: string, days: number, events: Events[]},{}> {
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
                <td><Day val={id+i+1} events={this.props.events.filter((event: Events) => event.day === id+i+1)}/></td>
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
