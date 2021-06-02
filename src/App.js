import React, { Component } from 'react'
import { Route, Switch } from 'react-router';

import { connect } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar';
import {handleInitialData} from './actions/shared'
import Login from './components/Login';
import Home from './components/Home';
import Questions from './components/questions';
import AuthedRoute from './routes/AuthedRoute';
import LeaderBoard from './components/leaderBoard';

class App extends Component{
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render () {
    const { loading, authedUser } = this.props

    return (
      <div className="container">
        <Navbar />
        
        <Switch>

          <AuthedRoute exact path="/" component={Home}/>

          <Route exact path="/login" component={Login}/>
          {/* <Route  path="/login" render = {({history}) =>{
            return loading === true || authedUser !== null
            ? null
            : <Login history = {history} /> 
          }}/> */}
          
          <AuthedRoute path="/questions" component={Questions}/>
          <AuthedRoute path="/leaderBoard" component={LeaderBoard}/>

        </Switch>

      </div>
    );
  }
}
const mapStateToProps = ({ users, authedUser }) => {
  return {
    users,
    authedUser,
    loading: Object.keys(users).length <= 0
  };
};
export default connect(mapStateToProps)(App);
