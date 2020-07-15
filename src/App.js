import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Home, UserProfile, Login, AccountsView} from './components';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      accountBalance: 14568.27,
      debits: [],
      credits: [],
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    };
  }   
       
    mockLogIn = (logInInfo) => {
       	const newUser = {...this.state.currentUser};
       	newUser.userName = logInInfo.userName;
       	this.setState({currentUser: newUser});
    }   

    /*
      
    */
    //Adding a debit element to state.debit
    onAddDebit = (val) => {
       	this.setState((prevState)=> {
       	    const newDebits = prevState.debits;
	    newDebits.push(val);
	    console.log("The new debits value: ", newDebits);
       	    return {debits: newDebits};
       	});
	
	//state.debits is updated, now update accountBalance with a reduction
	// val[1] = debit amount
	this.reduceAccountBalance(val[1]);
	return;
    }

    onAddCredit = (val) => {
	this.setState((prevState)=> {
       	    const newCredits = prevState.credits;
	    newCredits.push(val);
	    console.log("The new debits value: ", newCredits);
       	    return {credits: newCredits};
       	});
	
	//state.debits is updated, now update accountBalance with a reduction
	// val[1] = debit amount
	this.increaseAccountBalance(val[1]);
	return;
    }

	
    //Fucntion for explicitly reducing the accountBalance by 'amt'
    reduceAccountBalance = (amt) => {
	this.setState((prevState) => {
	    return {accountBalance : parseFloat(prevState.accountBalance) - parseFloat(amt)};
	});
    }

    
    increaseAccountBalance = (amt) => {
	this.setState((prevState) => {
	    return {accountBalance : parseFloat(prevState.accountBalance) + parseFloat(amt)};
	});
    }
    
    
    render() {
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
        const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
        );
	const LogInComponent = () => (
	        //{...this.props}
		<Login user={this.state.currentUser} mockLogIn={this.mockLogIn}/>
	);
	const DebitsComponent = () => (
		<AccountsView view="debits" accounts={this.state.debits} accountBalance={this.state.accountBalance} onAddAccount={this.onAddDebit}/>
	);
	const CreditsComponent = () => (
		<AccountsView view="credits" accounts={this.state.credits} accountBalance={this.state.accountBalance} onAddAccount={this.onAddCredit}/>
	);
	
	
        return (
            <Router>
              <Switch>
                <Route exact path="/" render={HomeComponent} />
	        <Route exact path="/userProfile" render={UserProfileComponent} />
		<Route exact path="/login" render={LogInComponent}/>
		<Route exact path="/debits" render={DebitsComponent}/>
		<Route exact path="/credits" render={CreditsComponent}/>
              </Switch>
            </Router>
        );
      } 
}       
        
export default App;
