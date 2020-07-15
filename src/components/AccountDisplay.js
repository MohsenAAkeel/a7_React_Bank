import React, { Component } from 'react';

class AccountDisplay extends Component {
    render() {
	return (
		<section id="accountsDisplay">
		<label> Accounts: </label>
		{this.props.accountBalance}
	    </section>
	);
    }
}

export default AccountDisplay;
