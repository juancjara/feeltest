import React, {Component} from 'react';
import Footer from './FooterComponent';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';

import Header from './HeaderComponent';


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
    if (score < 31) {
      return (
        <p>You need work with the FEEL first approach.</p>
      );
    } else if (score < 61) {
      return (
        <p>You're starting to FEEL, but you need more focus.</p>
      );
    } else if (score < 91) {
      return (
        <p>FEEL is a part of your approach ... don't stop now!</p>
      );
    } else {
      return (
        <p>Great work! You FEEL first before you communicate.</p>
      );
    }
  }


  render() {
    if (!this.props.location.state) {
      this.scores = JSON.parse(localStorage.getItem('scores'));
    } else {
      this.scores = this.props.location.state;
      localStorage.setItem('scores', JSON.stringify(this.props.location.state));
    }

    return (
      <div>
        <Header />
        <h3> Your Score for Part I Face Fears is : {this.scores.firstScore}/30</h3>
        <h3> Your Score for Part II Engage with Empathy is : {this.scores.secondScore}/30</h3>
        <h3> Your Score for Part III Use Ethics is : {this.scores.thirdScore}/30</h3>
        <h3> Your Score for Part IV Face Fears is : {this.scores.fourthScore}/30</h3>
        <h3> Your Overall Score is {this.scores.score} out of 120</h3>
        <h2>{this.renderMessage(this.scores.score)}</h2>

        <Button onClick={this.goHome} className="btn btn-lg btn-info retake">Home</Button>

        <Footer />
      </div>
    );
  }

}

Result.propTypes = {
  history: PropTypes.object,
};

export default Result;
