import React, { Component } from 'react';
import Footer from "./FooterComponent";
import feel from "../Feel_pic.png";
import {Button} from 'reactstrap';

import Header from "./HeaderComponent";


class About extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <Header/>
                <h1> About this quiz:</h1>
                <img className="pic" src={feel}></img>
                <Footer/>
            </div>
        )
    }

}
export default About;