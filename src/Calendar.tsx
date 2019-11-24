import React, {Component} from 'react';
import axios from 'axios';
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
    constructor(props: Props) {
      super(props);
      this.state = {
        allEvents: [],
        monthClicked: 0,
        dayClicked: 0
      };
      this.recieveMonthDay = this.recieveMonthDay.bind(this);
      this.resetMonthDay = this.resetMonthDay.bind(this);
      this.addEvent = this.addEvent.bind(this);

      axios.get(`http://localhost:8080/events`)
        .then(res => {
          this.setState({allEvents: res.data.entity});
        })
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
      this.setState({allEvents : this.state.allEvents.concat(tmp)});
    }

    
    render(){
      const events = this.state.allEvents.filter( (d: any) => {
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
          <tr key={0}>
              <td key={0}><Month name={months[0].name} id={1} days={months[0].days} events={this.state.allEvents.filter((event: Events) => event.month === 1)} sendMonthDay={this.recieveMonthDay}/></td>
              <td key={1}><Month name={months[1].name} id={2} days={months[1].days} events={this.state.allEvents.filter((event: Events) => event.month === 2)} sendMonthDay={this.recieveMonthDay}/></td>
              <td key={2}><Month name={months[2].name} id={3} days={months[2].days} events={this.state.allEvents.filter((event: Events) => event.month === 3)} sendMonthDay={this.recieveMonthDay}/></td>
              <td key={3}><Month name={months[3].name} id={4} days={months[3].days} events={this.state.allEvents.filter((event: Events) => event.month === 4)} sendMonthDay={this.recieveMonthDay}/></td>
          </tr>
          <tr key={1}>
              <td key={4}><Month name={months[4].name} id={5} days={months[4].days} events={this.state.allEvents.filter((event: Events) => event.month === 5)} sendMonthDay={this.recieveMonthDay}/></td>
              <td key={5}><Month name={months[5].name} id={6} days={months[5].days} events={this.state.allEvents.filter((event: Events) => event.month === 6)} sendMonthDay={this.recieveMonthDay}/></td>
              <td key={6}><Month name={months[6].name} id={7} days={months[6].days} events={this.state.allEvents.filter((event: Events) => event.month === 7)} sendMonthDay={this.recieveMonthDay}/></td>
              <td key={7}><Month name={months[7].name} id={8} days={months[7].days} events={this.state.allEvents.filter((event: Events) => event.month === 8)} sendMonthDay={this.recieveMonthDay}/></td>
          </tr>
          <tr key={2}>
              <td key={8}><Month name={months[8].name} id={9} days={months[8].days} events={this.state.allEvents.filter((event: Events) => event.month === 9)} sendMonthDay={this.recieveMonthDay}/></td>
              <td key={9}><Month name={months[9].name} id={10} days={months[9].days} events={this.state.allEvents.filter((event: Events) => event.month === 10)} sendMonthDay={this.recieveMonthDay}/></td>
              <td key={10}><Month name={months[10].name} id={11} days={months[10].days} events={this.state.allEvents.filter((event: Events) => event.month === 11)} sendMonthDay={this.recieveMonthDay}/></td>
              <td key={11}><Month name={months[11].name} id={12} days={months[11].days} events={this.state.allEvents.filter((event: Events) => event.month === 12)} sendMonthDay={this.recieveMonthDay}/></td>
          </tr>
        </tbody>
      );
    }
}

export default Calendar;
