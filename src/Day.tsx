import React, {Component} from 'react';

export class Day extends Component<{val: number},{}> {
    render(){
        return <p>{this.props.val}</p>;
    }
}

export default Day;
