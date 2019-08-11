import React, {Component} from 'react';
import Footer from './FooterComponent';
import {Button} from 'reactstrap';
import {Markup} from 'interweave';
import PropTypes from 'prop-types';

import Header from './HeaderComponent';


class Result extends Component {

  constructor(props) {
    super(props);
    this.renderMessage = this.renderMessage.bind(this);
    this.goHome = this.goHome.bind(this);
    const resultData = require('../static_data/ResultData.json');
    this.copies = resultData.resultCopy;

  }
  goHome() {
    this.props.history.push('/');
  }

  renderMessage(score) {
    if (score < 40) {
      return <Markup content={this.copies[0]} />;
    } else if (score < 80) {
      return <Markup content={this.copies[1]} />;
    } else if (score < 120) {
      return <Markup content={this.copies[2]} />;
    } else {
      return <Markup content={this.copies[3]} />;
    }
  }
  // TODO make this function cleaner
  render() {
    // if the last state was not the test, (refresh or back) grab scores from client storage
    let finalScores = {};
    if (!this.props.location.state) {
      finalScores = JSON.parse(localStorage.getItem('finalScores'));
    } else {
      this.scores = this.props.location.state.scores;
      finalScores.firstScore = this.scores.slice(0, 8).reduce((a, b) => a + b, 0);
      finalScores.secondScore = this.scores.slice(8, 16).reduce((a, b) => a + b, 0);
      finalScores.thirdScore = this.scores.slice(16, 24).reduce((a, b) => a + b, 0);
      finalScores.fourthScore = this.scores.slice(24).reduce((a, b) => a + b, 0);
      finalScores.total = this.scores.reduce((a, b) => a + b, 0);
      // clear the scores in localstorage to not persist when test is submitted
      localStorage.removeItem('scores');
      localStorage.setItem('finalScores', JSON.stringify(finalScores));
    }

    return (
      <div>
        <div className="result-container">
          <Header />
          <h3> Your Score for Part I Face Fears is : {finalScores.firstScore}/40</h3>
          <h3> Your Score for Part II Engage with Empathy is : {finalScores.secondScore}/40</h3>
          <h3> Your Score for Part III Use Ethics is : {finalScores.thirdScore}/40</h3>
          <h3> Your Score for Part IV Face Fears is : {finalScores.fourthScore}/40</h3>
          <h3> Your Overall Score is {finalScores.total} out of 160</h3>
          <div className="result-copy">{this.renderMessage(finalScores.total)}</div>
        </div>
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
