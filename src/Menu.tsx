import React, {Component} from 'react';
import './Menu.css';
import Form from './Form';

interface Props {
  monthName: string, 
  monthNum: number, 
  day: number, 
  events: Map<number, string>, 
  reset: Function, 
  addEvent: Function,
  delete: Function
};

interface States {
};

export class Menu extends Component<Props,States> {
  constructor(props: Props) {
    super(props);
    
    this.receiveDesc = this.receiveDesc.bind(this);
  }

  // FAILS IF DESC IS EMPTY OR WHITESPACE
  receiveDesc(desc: string){
    if (/\S/.test(desc)) {
      this.props.addEvent(this.props.monthNum, this.props.day, desc);
    }
  }
  
  render(){
    const events = this.props.events;
    const eventItems = Array.from( events.keys()).map( (id: number) =>
      <li key={id}><button className="delete" onClick={() => this.props.delete(id)}>&times;</button>{events.get(+id)}</li>
    )
    
    return (
      <div className="Menu">
        <div className="MenuHeader">
          <h2>{this.props.monthName} {this.props.day}</h2>
          <button className="close" onClick={() => this.props.reset()}>&times;</button>
        </div>
        <ul>
            {eventItems}
            {<Form sendDesc={this.receiveDesc}/>}
        </ul>    
      </div>
    );
  }
}

export default Menu;
