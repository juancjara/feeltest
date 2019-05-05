import React, { Component } from 'react';
import Footer from "./FooterComponent";
import feel from "../Feel_pic.png";
import {Button} from 'reactstrap';

import Header from "./HeaderComponent";


class Result extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <Header/>
                <h1> Your Score is {this.props.location.state.score} out of 120</h1>
                <Footer/>
            </div>
        )
    }

}
export default Result;