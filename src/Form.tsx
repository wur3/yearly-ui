import React, {Component} from 'react';
import './Form.css';

interface Props {
  sendDesc: Function
}

interface States {
  desc: string
}

export class Form extends Component<Props,States> {
  constructor(props: {sendDesc: Function}) {
    super(props);
    this.state = {
      desc: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({desc: event.currentTarget.value});
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    this.props.sendDesc(this.state.desc);
    this.setState({desc: ''});
  }
  
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="form" type="text" required placeholder="New event" value={this.state.desc} onChange={this.handleChange}/>
        <input className="add button" type="submit" value="+"/>
      </form>
    );
  }
}

export default Form;
