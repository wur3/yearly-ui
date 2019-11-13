import React, {Component} from 'react';
import './Calendar.css';
import Month from './Month';
import Menu from './Menu';

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
    desc: string
};

interface Props {};

interface States {
  allEvents: Events[],
  monthClicked: number, 
  dayClicked: number
};

export class Calendar extends Component<Props,States> {
    data = require('./data.json');

    constructor(props: {}) {
      super(props);
      this.state = {
        allEvents: this.data.special_days,
        monthClicked: 0,
        dayClicked: 0
      };
      this.recieveMonthDay = this.recieveMonthDay.bind(this);
      this.resetMonthDay = this.resetMonthDay.bind(this);
      this.addEvent = this.addEvent.bind(this);
    }

    recieveMonthDay(month: number, day: number) {
      this.setState({dayClicked : day, monthClicked : month });
    }

    resetMonthDay() {
      this.setState({dayClicked : 0, monthClicked : 0});
    }
    
    addEvent(newMonth: number, newDay: number, newDesc: string) {
      const tmp: Events = {
        month: newMonth,
        day: newDay,
        desc: newDesc 
      }
      this.data.special_days.push(tmp);
      console.log(this.data.special_days);
    }

    
    render(){
      const events = this.data.special_days.filter( (d: any) => {
        return d.month === this.state.monthClicked &&
          d.day === this.state.dayClicked;
      });
      const descs = events.map((d:any) => d.desc);
      return (
        <div>
          {this.state.monthClicked !== 0 && 
            <Menu monthName={months[this.state.monthClicked-1].name} monthNum={this.state.monthClicked} day={this.state.dayClicked} events={descs} reset={this.resetMonthDay} addEvent={this.addEvent}/>
          }
          
          <table className="Calendar">
            {this.renderMonths()}
          </table>
        </div>
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
                          <td><Month key={idx1} id={idx1+1} name={months[idx1].name} days={months[idx1].days} events={this.data.special_days.filter((event: Events) => event.month-1 === idx1)} sendMonthDay={this.recieveMonthDay}/></td>
                          <td><Month key={idx2} id={idx2+1} name={months[idx2].name} days={months[idx2].days} events={this.data.special_days.filter((event: Events) => event.month-1 === idx2)} sendMonthDay={this.recieveMonthDay}/></td>
                          <td><Month key={idx3} id={idx3+1} name={months[idx3].name} days={months[idx3].days} events={this.data.special_days.filter((event: Events) => event.month-1 === idx3)} sendMonthDay={this.recieveMonthDay}/></td>
                          <td><Month key={idx4} id={idx4+1} name={months[idx4].name} days={months[idx4].days} events={this.data.special_days.filter((event: Events) => event.month-1 === idx4)} sendMonthDay={this.recieveMonthDay}/></td>
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
