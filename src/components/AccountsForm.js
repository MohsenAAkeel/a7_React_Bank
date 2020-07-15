import React, { Component } from 'react';

class AccountsForm extends Component {
    constructor(props){
	super(props);
	this.state = {
	    desc:'',
	    amt:''
	};
    }

    addDesc = (e) => {
	e.preventDefault();
	this.setState({
	    desc: e.target.value
	});
    }

    addAmt = (e) => {
	e.preventDefault();
	this.setState({
	    amt: e.target.value
	});
    }

    
    handleClick = (e) => {
	e.preventDefault();
	if(this.state.desc === '' || this.state.amt === ''){
	    console.log("Description and amount are both required fields.");
	    return;
	}

	//the default date value is today's date
	let date = this.getDate();
	let val = [this.state.desc, this.state.amt, date];
	this.props.onAddAccount(val);
    }

    getDate = () => {
	var today = new Date();
        var d = String(today.getDate()).padStart(2, '0');
	var m = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var y = today.getFullYear();

	return ( m + '/' + d + '/' + y);
    }

    render(){
	return(
	    <form onSubmit={this.handleClick}>
	     <label>Description</label>
	      <input type="text" onChange={this.addDesc} />
	     <label>Amount</label>
	      <input type="text" onChange={this.addAmt} />
	     <input type="submit" value="Submit" />
	    </form>
	);
    }
}

export default AccountsForm;
