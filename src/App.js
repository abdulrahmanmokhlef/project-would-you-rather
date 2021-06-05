import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import LoadingBar, { showLoading, hideLoading } from 'react-redux-loading-bar';

import './App.css';
import Navbar from './components/Navbar';
import {handleInitialData} from './actions/shared'
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './routes/PrivateRoute';
import LeaderBoard from './components/leaderBoard';
import QuestionPage from './components/questionPage';
import NewQuestion from './components/NewQuestion';
import NotFound from './components/NotFound';

class App extends Component{
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(showLoading());
    dispatch(handleInitialData()).then(() => {
      dispatch(hideLoading());
    })
  }

  render () {
    const { loading } = this.props

    return (
      <Fragment>
          <div className="container">
            <Navbar />
            <LoadingBar />

            {loading === true
              ? null
              :
              <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <PrivateRoute path="/home" component={Home}/>
                <Route  path="/login" component={Login}/>
                <PrivateRoute path="/add" component={NewQuestion}/>
                <PrivateRoute path="/questions/:id" component={QuestionPage}/>
                <PrivateRoute path="/leaderBoard" component={LeaderBoard}/>
                <Route path="*"  component={NotFound} /> 
                <Route component={NotFound} />
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
    loading: Object.keys(users).length <= 0,
  };
};
export default connect(mapStateToProps)(App);
