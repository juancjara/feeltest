import React, { Component } from 'react';
import Footer from "./FooterComponent";
import feel from "../Feel_pic.png";
import {Button, Jumbotron} from 'reactstrap';
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
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h2>FEEL TEST</h2>
                                <p>FEEL First Before You Communicate</p>
                            </div>
                            <div className={"col-12 col-sm-6"}>
                                <img src={feel} alt="FEEL" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div>
                    <Button onClick={this.goToQuiz} className='btn btn-lg btn-info'>Start the FEEL test!</Button>
                </div>
                <Footer/>
            </div>
        )
    }

}
export default withRouter(Main);