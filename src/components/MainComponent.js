import React, { Component } from 'react';
import Footer from "./FooterComponent";
import feel from "../Feel_pic.png";
import {Button} from 'reactstrap';
import { withRouter } from 'react-router-dom'
import Header from "./HeaderComponent";


class Main extends Component {

    constructor(props) {
        super(props);
        this.goToQuiz = this.goToQuiz.bind(this);

    }

    goToQuiz() {
        this.props.history.push('/FEEL');

    }

    render() {
        return (
            <div>
                <Header/>
                <h1> FEEL First Before You Communicate TEST </h1>
                <img className="pic" src={feel}></img>
                <div>
                    <Button onClick={this.goToQuiz} class='btn btn-lg btn-info'>Start the FEEL test!</Button>
                </div>
                <Footer/>
            </div>
        )
    }

}
export default withRouter(Main);