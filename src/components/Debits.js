import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBalanceDisplay from './AccountBalanceDisplay';
import AccountsDisplay from './AccountsDisplay';
import AccountsForm from './AccountsForm';
import Navbar from './Navbar';

class Debits extends Component {    
    render(){
	return (
            <div>
	     <h1> Debits </h1>
	     <Navbar />

		<div className="DebitsDisplay">
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
	    
export default Debits;
