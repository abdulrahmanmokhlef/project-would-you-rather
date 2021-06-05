import React from 'react'
import { connect } from 'react-redux'
import { NavLink,  useHistory } from 'react-router-dom';

import {  setAuthedUser} from "../actions/authedUser";
import { removeFromLocalstorage } from '../utils/localStorage';
const Navbar = (props) =>{
    const { loggedUser, dispatch} = props
    const history = useHistory();
    
    const handleLogout = (e) =>{
        e.preventDefault()
        
        dispatch(setAuthedUser(null))
        removeFromLocalstorage('authedUser')
        history.push("/login");
    } 

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" >WYR</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to='/' className="nav-link active" aria-current="page" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink to="/new" className="nav-link" href="#">New Question</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/leaderBoard" className="nav-link" href="#">Leader Board</NavLink>
                        </li>
                    </ul>
                    {loggedUser && (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            
                                <span className="nav-link disabled "  tabIndex="-1" aria-disabled="true">
                                    Hi {loggedUser.name }
                                    <img className="avatar" alt="100x100" src={loggedUser.avatarURL} data-holder-rendered="true"/>
                                </span>
                            
                            </li>
                            <li className="nav-item ml-auto">
                                <NavLink to ="/" className="nav-link " onClick={handleLogout} >Logout</NavLink>
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