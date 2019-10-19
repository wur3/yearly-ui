import React, {Component} from 'react';

export class Month extends Component<{name: string},{}> {
    render(){
        return <table>
            <thead>
                <tr>
                    <td>{this.props.name}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>column 1 row 1</td>
                </tr>
                <tr>
                    <td>column 1 row 2</td>
                </tr>
            </tbody>
        </table>;
    }
}

export default Month;