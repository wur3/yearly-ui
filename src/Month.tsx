import React, {Component} from 'react';
import Day from './Day';

export class Month extends Component<{name: string, days: number},{}> {
    render(){
        return <table>
            <thead>
                <tr>
                    <td>{this.props.name}</td>
                </tr>
            </thead>
            <tbody>
                {this.renderDays()}
            </tbody>
        </table>;
    }
    renderDays(){
        return Array(this.props.days).fill('').map((val, id)=> {
            if (id % 7 === 0) {
                return (
                    <tr key={id/7}>
                        {Array(7).fill('').map((val, i)=> {
                            if (id+i+1 > this.props.days) return;
                            return (<td><Day val={id+i+1}/></td>)
                        })}
                    </tr>
                )
            }
        })
    }
}

export default Month;
