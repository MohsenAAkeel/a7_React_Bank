import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
	return (
	    <ul>
	     <li><Link to="/">Home </Link></li>
	     <li><Link to="/userProfile">Profile </Link></li>
	     <li><Link to="/login">Log-in </Link></li>
	     <li><Link to="/debits">Debits </Link></li>
             <li><Link to="/credits">Credits </Link></li>
	    
	    </ul>
	);
    }
}

export default Navbar;
