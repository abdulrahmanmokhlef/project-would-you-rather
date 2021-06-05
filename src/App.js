import React, { Component, Fragment } from 'react'
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
import QuestionPage from './components/questionPage';
import { LoadingBar } from 'react-redux-loading';

class App extends Component{
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render () {
    const { loading, authedUser } = this.props

    return (
      <Fragment>
          <LoadingBar />
          <div className="container">
            <Navbar />
            
            {loading === true
              ? null
              :
              <Switch>
                <AuthedRoute exact path="/" component={Home}/>

                <Route  path="/login" component={Login}/>
                <AuthedRoute path="/questions" component={Questions}/>
                <AuthedRoute path="/question/:id" component={QuestionPage}/>
                <AuthedRoute path="/leaderBoard" component={LeaderBoard}/>
              </Switch>
            }
          </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ users}) => {
  return {
    users,
    loading: Object.keys(users).length <= 0
  };
};
export default connect(mapStateToProps)(App);
