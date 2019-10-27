import React, {Component} from 'react';
import './Calendar.css';
import Month from './Month';

const months= [
    {'name': 'January', 'days': 31},
    {'name': 'February', 'days': 29},
    {'name': 'March', 'days': 31},
    {'name': 'April', 'days': 30},
    {'name': 'May', 'days': 31},
    {'name': 'June', 'days': 30},
    {'name': 'July', 'days': 31},
    {'name': 'August', 'days': 31},
    {'name': 'September', 'days': 30},
    {'name': 'October', 'days': 31},
    {'name': 'November', 'days': 30},
    {'name': 'December', 'days': 31}
];

interface Events {
    month: number,
    day: number,
    desc: string;
};

export class Calendar extends Component {
    data = require('./data.json');

    state = {
        'title': "Birthdays"
    };
    render(){
        return (
          <table className="Calendar">
            {this.renderMonths()}
          </table>
        );
    }

    renderMonths(){
      return (
        <tbody>
          {months.map((month, id)=> {
              if (id % 4 === 0) {
                  var idx1 = id+0,
                  idx2 = id+1,
                  idx3 = id+2,
                  idx4 = id+3;
                  return (
                      <tr key={id/4}>
                          <td><Month name={months[idx1].name} days={months[idx1].days} events={this.data.special_days.filter((event: Events) => event.month-1 === idx1)}/></td>
                          <td><Month name={months[idx2].name} days={months[idx2].days} events={this.data.special_days.filter((event: Events) => event.month-1 === idx2)}/></td>
                          <td><Month name={months[idx3].name} days={months[idx3].days} events={this.data.special_days.filter((event: Events) => event.month-1 === idx3)}/></td>
                          <td><Month name={months[idx4].name} days={months[idx4].days} events={this.data.special_days.filter((event: Events) => event.month-1 === idx4)}/></td>
                      </tr>
                  );
              }
              else return null;
          })}
        </tbody>
      );
    }
}

export default Calendar;
