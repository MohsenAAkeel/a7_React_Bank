import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBalanceDisplay from './AccountBalanceDisplay';
import AccountsDisplay from './AccountsDisplay';
import AccountsForm from './AccountsForm';
import Navbar from './Navbar';

class AccountsView extends Component {    
    constructor (props) {
	super(props);
	this.state = {
	    titles:{
		debits: "Debits",
		credits: "Credits"
	    }
	};
    }
	    
    
    title = ()=> {
	return(this.state.titles[this.props.view]);
    }

    render(){
	return (
            <div>
		<h1 id="header"> {this.title()} </h1>
	     <Navbar />

		<div className="AccountsDisplay">
		<AccountsDisplay accounts={this.props.accounts} />
		</div>

	        <div className="AccountBalanceDisplay">
		<AccountBalanceDisplay accountBalance={this.props.accountBalance}/>
		</div>

	        <div className="DebitsForm">
		<AccountsForm onAddAccount={this.props.onAddAccount}/>
		</div>
	       </div>
	);
    }
}
	    
export default AccountsView;

