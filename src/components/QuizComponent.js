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
    this.questions = quizData.questions;
    this.titles = quizData.titles;
    this.state = {
      currentSection: 0,
      reload0: false,
      reload1: false,
      reload2: false,
      reload3: false,
      reload4: false,
      reload5: false,
    };
    this.scoreArr = [];
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  //
  render() {
    return (
      <div className={`bg${this.state.currentSection}`}>
        <Header />
        <div className="one">

          {this.currentQuestions(this.state.currentSection, this.state.reload)}
        </div>
        <div>
          {this.DyanmicButton(this.state.currentSection)}
        </div>
        <Footer />
      </div>

    );
  }


    handleQuestionChange = event => {
      let exit = false;
      for (let i = this.state.currentSection * 6; i < this.state.currentSection * 6 + 6; i++) {
        if (this.scoreArr[i] === undefined) {
          exit = true;
          break;
        }
      }

      if (event === 'prev') {
        this.setState({
          currentSection: this.state.currentSection - 1,
        });
      } else if (event === 'next') {
        this.setState({
          currentSection: this.state.currentSection + 1,
        });
      } else if (event === 'fin') {
        let finalScore = 0;
        let firstScore = 0;
        let secondScore = 0;
        let thirdScore = 0;
        let fourthScore = 0;
        for (let i = 0; i < 24; i++) {
          if (i < 6) {
            if (this.scoreArr[i]) { firstScore += this.scoreArr[i]; }
          } else if (i < 12) {
            if (this.scoreArr[i]) { secondScore += this.scoreArr[i]; }
          } else if (i < 18) {
            if (this.scoreArr[i]) { thirdScore += this.scoreArr[i]; }
          } else if (this.scoreArr[i]) { fourthScore += this.scoreArr[i]; }
          if (this.scoreArr[i]) { finalScore += this.scoreArr[i]; }
        }
        this.props.history.push({
          pathname: '/Result',
          state: {
            score: finalScore,
            firstScore,
            secondScore,
            thirdScore,
            fourthScore,
          },
        });
      }

      this.setState({
        reload0: true,
        reload1: true,
        reload2: true,
        reload3: true,
        reload4: true,
        reload5: true,
      });

      window.scroll(0, 0);
    };

    handleOptionChange(id, event) {
      switch (id) {
        case 0:
          this.setState({
            reload0: false,
          });
          break;
        case 1:
          this.setState({
            reload1: false,
          });
          break;
        case 2:
          this.setState({
            reload2: false,
          });
          break;
        case 3:
          this.setState({
            reload3: false,
          });
          break;
        case 4:
          this.setState({
            reload4: false,
          });
          break;
        case 5:
          this.setState({
            reload5: false,
          });
          break;
        default:
      }
      this.scoreArr[(this.state.currentSection * 6) + id] = event;
    }


    // Button that will change dynamically based on what question set the user is currently looking at.
    DyanmicButton(currentSection) {
      if (currentSection === 3) {
        return (
          <Button onClick={() => this.handleQuestionChange('fin')} className="btn btn-lg btn-info">Submit</Button>
        );
      }
      return (
        <Button onClick={() => this.handleQuestionChange('next')} className="btn btn-lg btn-info">
                    Next
        </Button>
      );
    }


    currentQuestions(currentSection) {
      return (
        <div>
          <h1><Markup content={this.titles[currentSection]} /></h1>
          <Question
            reload={this.state.reload0}
            number={(currentSection * 6) + 1}
            question_text={this.questions[(currentSection * 6)]}
            id={0}
            onChange={this.handleOptionChange}
          />
          <Question
            reload={this.state.reload1}
            question_text={this.questions[(currentSection * 6) + 1]}
            number={(currentSection * 6) + 2}
            id={1}
            onChange={this.handleOptionChange}
          />
          <Question
            reload={this.state.reload2}
            question_text={this.questions[(currentSection * 6) + 2]}
            number={(currentSection * 6) + 3}
            id={2}
            onChange={this.handleOptionChange}
          />
          <Question
            reload={this.state.reload3}
            question_text={this.questions[(currentSection * 6) + 3]}
            number={(currentSection * 6) + 4}
            id={3}
            onChange={this.handleOptionChange}
          />
          <Question
            reload={this.state.reload4}
            question_text={this.questions[(currentSection * 6) + 4]}
            number={(currentSection * 6) + 5}
            id={4}
            onChange={this.handleOptionChange}
          />
          <Question
            reload={this.state.reload5}
            question_text={this.questions[(currentSection * 6) + 5]}
            number={(currentSection * 6) + 6}
            id={5}
            onChange={this.handleOptionChange}
          />
        </div>
      );
    }
}

export default Quiz;
