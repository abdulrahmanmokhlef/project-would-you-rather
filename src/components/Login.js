import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {

    state = {
        userId: '',
    }


    handleChange = (event) =>{
        const userId = event.target.value
        this.setState(() => ({
            userId,
          }))
    }

    handleSubmit = (e) =>{
        
        e.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.userId));
        debugger
        const UrlFrom =
            this.props.location !== undefined && this.props.location.state !== undefined
                ? this.props.location.state.from
                : '/home';

        this.props.history.push(`${UrlFrom}`);
    }
    
    render () {
        const { users } = this.props

        return (
            <div className="login-container">
                <form className="form-signin" onSubmit ={this.handleSubmit}>
                    <legend>Signin</legend>
                    <div className="mb-3">
                    </div>
                    <div className="mb-3">
                        <select className="form-control" onChange={this.handleChange}>
                            <option >Select user</option> 
                            {Object.keys(users).map( user => {
                               return <option key={user} value={user}>{users[user].name}</option>
                            })}
                        </select>
                    </div>
            
                    <button type="submit" disabled = {this.state.userId === ''}className="btn btn-info full-width">Signin</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps ( { users }) {
   return {
    users,
   } 
}
export default connect(mapStateToProps)(Login)