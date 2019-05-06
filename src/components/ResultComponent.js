import React, { Component } from 'react';
import Footer from "./FooterComponent";
import feel from "../Feel_pic.png";
import {Button} from 'reactstrap';

import Header from "./HeaderComponent";


class Result extends Component {

    constructor(props) {
        super(props);
        this.renderMessage = this.renderMessage.bind(this);
        this.goHome = this.goHome.bind(this);
    }
    goHome() {
        this.props.history.push('/');

    }

    renderMessage(score) {
        if(score < 31) {
            return(
                <p>You need work with the FEEL first approach.</p>
            );
        } else if (score < 61) {
            return(
                <p>You're starting to FEEL, but you need more focus.</p>
            );
        } else if (score < 91) {
            return(
                <p>FEEL is a part of your approach ... don't stop now!</p>
            );
        } else {
            return(
                <p>Great work! You FEEL first before you communicate.</p>
            );
        }
    }


    render() {
        return (
            <div>
                <Header/>
                <h3> Your Score for Part I Face Fears is : {this.props.location.state.firstScore}/30</h3>
                <h3> Your Score for Part II Engage with Empathy is : {this.props.location.state.secondScore}/30</h3>
                <h3> Your Score for Part III Use Ethics is : {this.props.location.state.thirdScore}/30</h3>
                <h3> Your Score for Part IV Face Fears is : {this.props.location.state.fourthScore}/30</h3>
                <h3> Your Overall Score is {this.props.location.state.score} out of 120</h3>
                <h2>{this.renderMessage(this.props.location.state.score)}</h2>

                <Button onClick={this.goHome} className='btn btn-lg btn-info retake'>Home</Button>

                <Footer/>
            </div>
        )
    }

}
export default Result;