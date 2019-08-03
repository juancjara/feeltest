import React, {Component} from 'react';
import Footer from './FooterComponent';
import feel from '../Feel_pic.png';
import Header from './HeaderComponent';


class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={'about-container'}>
          <h1> About this quiz </h1>
          <h3>
            The FEEL First Test is designed to evaluate your communication in four areas, which includes your ability to:
          </h3>
          <ul>
            <li>Face <b>Fears</b> (How open are you to new perspectives?)</li>
            <li>Engage with <b>Empathy</b> (How compassionate are you in your conversations?)</li>
            <li>Use <b>Ethics</b> and Good Judgment (How ethical are you in your communications and decision-making?)</li>
            <li>Unleash the <b>Love</b> of your Mission (How passionate are you in your communications?)</li>
          </ul>

          <h3>Each part of the test has a separate score. You also receive an overall FEEL First score.
            Your overall score is based on a FEEL First range. Low scores reveal not enough FEEL in your communications.
            High scores demonstrate FEEL First mastery, which means you have the potential to build genuine relationships
            based on your ability to be vulnerable, empathetic, transparent and passionate.
          </h3>
          <h3>
            The test questions are based on a five-point scale with eight questions per section in the test.
          Your ability to answer honestly helps with accurate scoring and how much you FEEL First when engaging
          through different channels and communication touchpoints.</h3>
          <h3>
            Please note that the FEEL First Test is still in beta. All of your feedback is encouraged and welcomed.
            Thank you for taking the time to learn more about the FEEL First Test.
          </h3>
          <img className="pic" src={feel} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default About;
