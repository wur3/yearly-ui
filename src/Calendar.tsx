import React, {Component} from 'react';
import Month from './Month';

const months= [
    {'name': 'January', 'days': 31},
    {'name': 'February', 'days': 28},
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

export class Calendar extends Component {
    state = {
        'title': "Birthdays"
    };
    render(){

        return (
            <table>
              {this.renderMonths()}
            </table>
        )
    }

    renderMonths(){
        return months.map((month, id)=> {
            if (id % 4 === 0) {
                return (
                    <tr key={id/4}>
                        <td><Month name={month.name} days={month.days}/></td>
                        <td><Month name={months[id+1].name} days={months[id+1].days}/></td>
                        <td><Month name={months[id+2].name} days={months[id+2].days}/></td>
                        <td><Month name={months[id+3].name} days={months[id+3].days}/></td>
                    </tr>
                )
            }
            else return
        })
    }
}

export default Calendar;
