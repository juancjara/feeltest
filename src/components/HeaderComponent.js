import React, { Component } from 'react';
import {NavbarBrand, Navbar, Jumbotron, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink } from 'react-router-dom';
import feel from "../Feel_pic.png";

class Header extends Component {


    constructor(props){
        super(props);
        this.state= {
            isNavOpen : false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {
        return(
            <div>
                <Navbar dark expand = "md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src={feel} height="100px" width="200px" alt="FEEL" />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className ="nav-link" to = "/home">
                                        <span className =" fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className ="nav-link" to = "/aboutus">
                                        <span className =" fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className ="nav-link" to = "/menu">
                                        <span className =" fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>FEEL TEST</h1>
                                <p>FEEL First Before You Communicate Test</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default Header;