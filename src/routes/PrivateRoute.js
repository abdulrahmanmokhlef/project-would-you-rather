import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

function PrivateRoute (props){
    const { userIds, authedUser, loading, ...restProps } = props
    debugger

    if(userIds.find(id => id === authedUser)){
        return <Route {...restProps}/>
    } else {
        return <Redirect to={{
                            pathname: '/login',
                            state: { from: props.location.pathname },
                        }} 
                />
    }
}

const mapStateToProps = state => ({
    authedUser: state.authedUser,
    userIds: Object.keys(state.users),
    loading: Object.keys(state.users).length <= 0,    
});

export default connect(mapStateToProps)(PrivateRoute)

