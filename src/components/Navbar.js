import React from 'react'
import {Navbar, Nav, Image, Container} from 'react-bootstrap';

export default function (props) {
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
                        <li clclassNameass="nav-item">
                        <a className="nav-link" href="#">New Question</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Leader board</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link disabled " href="#" tabindex="-1" aria-disabled="true">
                                Hi username
                                <img class="avatar" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" data-holder-rendered="true"/>
                            </a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link " href="#" >Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

