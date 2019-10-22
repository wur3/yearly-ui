import React, {Component} from 'react';
import './Month.css';
import Day from './Day';

export class Month extends Component<{name: string, days: number},{}> {
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
                <td><Day val={id+i+1}/></td>
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
