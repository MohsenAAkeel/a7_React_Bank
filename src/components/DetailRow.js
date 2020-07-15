import React, { Component } from 'react';

class DetailRow extends Component {

    render() {
        return(
	    <tr>
	      <th scope="row">Description</th>
	      <td>{this.props.desc}</td>
	      <th scope="row">Amount</th>
	      <td>{this.props.amt}</td>
	      <th scope="row">Date</th>
	      <td>{this.props.date}</td>
	    </tr>
        );
    }
}

export default DetailRow;
