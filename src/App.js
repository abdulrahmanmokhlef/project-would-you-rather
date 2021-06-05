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
import NewQuestion from './components/NewQuestion';

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
                <AuthedRoute exact path="/home" component={Home}/>

                <Route  path="/login" component={Login}/>
                <AuthedRoute path="/new" component={NewQuestion}/>
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
