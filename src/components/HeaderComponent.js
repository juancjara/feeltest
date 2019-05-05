import React, { Component } from 'react';
import {NavbarBrand, Navbar, Jumbotron, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink } from 'react-router-dom';
import feel from "../Feel_pic.png";

class Header extends Component {


    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <ul>
                    <li> <NavLink className ="nav-link" to = "/">
                        <span className ="fa fa-home fa-lg"></span>Home
                    </NavLink></li>
                    <li> <NavLink className ="nav-link" to = "/FEEL">
                        <span className ="fa fa-clipboard fa-lg"></span>Feel quiz
                    </NavLink></li>
                    <li> <NavLink className ="nav-link" to = "/about">
                        <span className ="fa fa-info-circle fa-lg"></span>About
                    </NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Header;