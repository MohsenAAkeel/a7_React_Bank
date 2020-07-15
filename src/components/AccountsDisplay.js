import React, { Component } from 'react';
import DetailRow from './DetailRow';

class AccountsDisplay extends Component {
    
    
    genRows = ()=> {
	console.log(typeof this.props.accounts);
	if(this.props.accounts.length === 0){
	    return [];
	}
	
	
	let rows = this.props.accounts.map((item, i) => {
	    return(
	        <DetailRow desc={item[0]} amt={item[1]} date={item[2]}/>
	    );
	});
	
	return rows;
    }	
		
		
    render() {
	return (
	    <table>
		<tbody>
		{this.genRows()}
	        </tbody>
	    </table>
	);
    }
}


export default AccountsDisplay;
