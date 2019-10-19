import React, {Component} from 'react';
import Month from './Month';

const months= ['January', 'February','March','April','May','June','July','August','September','October','November','December'];

export class Calendar extends Component {
    state = {
        title: "Birthdays"
    };
    render(){

        return <table>
              {this.renderMonths()}
            </table>;
    }

    renderMonths(){
        return months.map((month, id)=> {
            if (id % 4 === 0) {
                return (
                    <tr key={id}>
                        <td><Month name={month}/></td>
                        <td><Month name={months[id+1]}/></td>
                        <td><Month name={months[id+2]}/></td>
                        <td><Month name={months[id+3]}/></td>
                    </tr>
                )}
            }
        )
    }
}

export default Calendar;
