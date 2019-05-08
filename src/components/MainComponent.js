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
            <div className="main-container">
                <Header/>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h2>FEEL TEST</h2>

                                <h3 className={"titleInfo"}>If you FEEL first before you communicate, you'll build stronger relationships
                                    through all of your online channels and in-person too. Here are several questions
                                    you can ask yourself about Facing your <b>Fears</b>, communicating with <b>Empathy</b>,
                                    using <b>Ethics</b> and good judgment and discovering your <b>Love</b>
                                    for the mission.
                                </h3>

                                <h3 className={"titleInfo"}>
                                    Modern Communicators are generally taught to consider their audience, timing,
                                    channels, messaging and measurement. However, when you add FEEL to your plan,
                                    your communications will resonate and your relationships will grow stronger with
                                    the people that matter.
                                </h3>
                            </div>
                            <div className={"col-12 col-sm-6"}>
                                <img src={feel} alt="FEEL" />
                                <h3 className={"titleInfo"}>The FEEL First Test is currently in Beta. As you move through the test,
                                    you cannot refresh the page or hit the back arrow on your browser.
                                    If you do, then you may lose the data you've entered on the page.</h3>
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