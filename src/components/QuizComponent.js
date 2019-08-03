import React, {Component} from 'react';
import {Markup} from 'interweave';
import {Button} from 'reactstrap';

import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Question from './QuestionCompoent';


class Quiz extends Component {
  constructor(props) {
    super(props);
    const quizData = require('../static_data/QuizData.json');
    this.quizPart = props.location.pathname[props.location.pathname.length - 1];
    this.questions = quizData.questions[this.quizPart];
    this.title = quizData.titles[this.quizPart];
    this.scores = [];
    this.handleOptionChange = this.handleOptionChange.bind(this);
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.location.state !== undefined) {
      this.scores = this.props.location.state.scores;
    } else if (localStorage.getItem('scores')) {
      this.scores = JSON.parse(localStorage.getItem('scores'));
    }
    return (
      // mapping css class based on current part of test
      <div className={`bg${this.quizPart}`}>
        <Header />
        <div className="one">
          {this.currentQuestions()}
        </div>
        <div>
          {this.DyanmicButton()}
        </div>
        <Footer />
      </div>

    );
  }

  handleQuestionChange() {
    let pathname = '';
    if (this.quizPart === '3') {
      // go to result
      pathname = '/Result';
    } else {
      pathname = '/test/' + (parseInt(this.quizPart) + 1) + '';
    }


    this.props.history.push({
      pathname: pathname,
      state: {scores: this.scores},
    });

  }

  handleOptionChange(id, event) {
    this.scores[(this.quizPart * 8) + id] = event;
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }


  // Button that will change dynamically based on what question set the user is currently looking at.
  DyanmicButton() {
    if (this.quizPart === '3') {
      return (
        <Button onClick={() => this.handleQuestionChange()} className="btn btn-lg btn-info">Submit</Button>
      );
    }
    return (
      <Button onClick={() => this.handleQuestionChange()} className="btn btn-lg btn-info">Next</Button>
    );
  }

  currentQuestions() {
    const questions = [];
    questions.push(<h1><Markup content={this.title} /></h1>);
    for (let i = 0; i < this.questions.length; i++) {
      questions.push(
        <Question
          number={(this.quizPart * 8) + (i) + 1}
          question_text={this.questions[i]}
          id={i}
          onChange={this.handleOptionChange}
          savedAnswer={this.scores[(this.quizPart * 8) + i]}
        />,
      );
    }
    return questions;
  }
}

export default Quiz;
