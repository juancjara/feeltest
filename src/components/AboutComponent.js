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
                <h1> About this quiz: </h1>
                <h3>If you FEEL first before you communicate, you'll build stronger relationships through all of your
                    online channels and in-person too. Here are several questions you can ask yourself about Facing
                    your Fears, communicating with Empathy, using Ethics and good judgment and discovering your Love
                    for the mission. Modern Communicators are generally taught to consider their audience, timing,
                    channels, messaging and measurement. However, when you add FEEL to your plan, your communications
                    will resonate and your relationships will grow stronger with the people that matter.</h3>
                <img className="pic" src={feel}></img>
                <Footer/>
            </div>
        )
    }

}
export default About;