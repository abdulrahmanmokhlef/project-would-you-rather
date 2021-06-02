import React, { Component } from 'react'
import { connect } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar';
import {handleInitialData} from './actions/shared'
import Login from './components/Login';

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
        {loading === true || authedUser !== null
          ? null
          : <Login />}
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
