import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBalanceDisplay from './AccountBalanceDisplay';
import AccountsDisplay from './AccountsDisplay';
import AccountsForm from './AccountsForm';
import Navbar from './Navbar';

class Credits extends Component {    
    render(){
	return (
            <div>
	     <h1> Credits </h1>
	     <Navbar />

		<div className="AccountsDisplay">
		<AccountsDisplay accounts={this.props.accounts} />
		</div>

	        <div className="AccountBalanceDisplay">
		<AccountBalanceDisplay accountBalance={this.props.accountBalance}/>
		</div>

	        <div className="AccountsForm">
		<AccountsForm onAddAccount={this.props.onAddAccount}/>
		</div>
	       </div>
	);
    }
}
	    
export default Credits;
