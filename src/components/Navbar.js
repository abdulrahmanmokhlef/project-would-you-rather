import React from 'react'
import { connect } from 'react-redux'

import {  setAuthedUser} from "../actions/authedUser";
const Navbar = (props) =>{
    const { loggedUser, dispatch} = props
    debugger
    const handleLogout = (e) =>{
        e.preventDefault()
        
        dispatch(setAuthedUser(null))
    } 

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">WYR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">New Question</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Leader board</a>
                        </li>
                    </ul>
                    {loggedUser && (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            
                                <a className="nav-link disabled " href="#" tabIndex="-1" aria-disabled="true">
                                    Hi {loggedUser.name }
                                    <img className="avatar" alt="100x100" src={loggedUser.avatarURL} data-holder-rendered="true"/>
                                </a>
                            
                                
                            </li>
                            <li className="nav-item ml-auto">
                                <a className="nav-link " href="#" onClick={handleLogout} >Logout</a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}
function mapStateToProps ({users, authedUser}) {
    const loggedUser = users[authedUser]
    return{
        loggedUser,
    }
}
export default connect(mapStateToProps)(Navbar)