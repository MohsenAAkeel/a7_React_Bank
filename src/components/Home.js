import React, { Component } from 'react';
import AccountBalanceDisplay from './AccountBalanceDisplay';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
    
class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
           <h1>Bank of React</h1>

	    <Navbar />
	
	   <AccountBalanceDisplay accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}
    
export default Home;
