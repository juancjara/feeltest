import React, { Component } from 'react';
import Footer from "./FooterComponent";
import feel from "../Feel_pic.png";
import { withRouter } from 'react-router-dom'
import Question from "./QuestionCompoent";
import {Button} from 'reactstrap';
import Header from "./HeaderComponent";


class Quiz extends Component {

    constructor(props) {
        super(props);
        this.questions = ['Do you take time every day to learn something new in your professional role (i.e.using technology, working with a new team)?\n',
        'Do you take time every day to learn something personally related to your interests/hobby?\n',
        'How open (meaning how much you listen and engage to learn more) are you to another person’s perspective at work about work-related topics?\n',
        'How open (meaning how much you listen and engage to learn more) are you to another person’s perspective when sharing an opinion about your personal growth and development?\n',
        'Do you step out of your comfort zone to try new activities at work?\n',
        'Do you step out of your comfort zone to try new personal endeavors that you’ve never tried before in your free time?\n',
        '',
        '',
        '']
    }

    render() {
        return (
            <div className="container-fluid">
                <div className={"one"}>
                    <Header/>
                    <h1>Part I: Face Fears</h1>
                    <h2>(on a scale of 1 to 10 - 1 meaning none of the time and 10 meaning all of the time)</h2>
                    <Question question_text={this.questions[0]}/>
                    <Question question_text={this.questions[1]}/>
                    <Question question_text={this.questions[2]}/>
                    <Question question_text={this.questions[3]}/>
                    <Question question_text={this.questions[4]}/>
                    <Question question_text={this.questions[5]}/>
                </div>
                <div className={"two"}>
                    <h1>Part II: Engage with Empathy</h1>
                    <h2>(on a scale of 1 to 10 - 1 meaning none of the time and 10 meaning all of the time)</h2>
                    <Question question_text={this.questions[0]}/>
                    <Question question_text={this.questions[1]}/>
                    <Question question_text={this.questions[2]}/>
                    <Question question_text={this.questions[3]}/>
                    <Question question_text={this.questions[4]}/>
                    <Question question_text={this.questions[5]}/>
                </div>
                <div className={"three"}>
                    <h1>Part II: Engage with Empathy</h1>
                    <h2>(on a scale of 1 to 10 - 1 meaning none of the time and 10 meaning all of the time)</h2>
                    <Question question_text={this.questions[0]}/>
                    <Question question_text={this.questions[1]}/>
                    <Question question_text={this.questions[2]}/>
                    <Question question_text={this.questions[3]}/>
                    <Question question_text={this.questions[4]}/>
                    <Question question_text={this.questions[5]}/>
                </div>
                <div className={"four"}>
                    <h1>Part II: Engage with Empathy</h1>
                    <h2>(on a scale of 1 to 10 - 1 meaning none of the time and 10 meaning all of the time)</h2>
                    <Question question_text={this.questions[0]}/>
                    <Question question_text={this.questions[1]}/>
                    <Question question_text={this.questions[2]}/>
                    <Question question_text={this.questions[3]}/>
                    <Question question_text={this.questions[4]}/>
                    <Question question_text={this.questions[5]}/>
                </div>



                <div>
                    <Button className='btn btn-lg btn-info'>Submit</Button>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default Quiz;