import React, {Component} from 'react';
import './Menu.css';
import Form from './Form';

interface Props {
  monthName:string, 
  monthNum: number, 
  day: number, 
  events: string[], 
  reset: Function, 
  addEvent: Function
};

interface States {
  showForm: boolean;
};

export class Menu extends Component<Props,States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showForm: false
    };
    this.receiveDesc = this.receiveDesc.bind(this);
  }

  // FAILS IF DESC IS EMPTY OR WHITESPACE
  receiveDesc(desc: string){
    if (/\S/.test(desc)) {
      this.props.addEvent(this.props.monthNum, this.props.day, desc);
    }
  }
  
  render(){
    const eventItems = this.props.events.map( (event) =>
        <li>{event}</li>
    )
    return (
      <div className="Menu">
        <div className="MenuHeader">
          <h2>{this.props.monthName} {this.props.day}</h2>
          <button className="close" onClick={() => this.props.reset()}>&times;</button>
        </div>
        <ul>
            {eventItems}
            {this.state.showForm &&
              <Form sendDesc={this.receiveDesc}/>
            }
        </ul>
        <button className="add" onClick={() => this.setState({showForm: true})}>+</button>        
      </div>
    );
  }
}

export default Menu;
