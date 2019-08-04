import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Jumbotron} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import feel from '../Feel_pic.png';

class Main extends Component {
  constructor(props) {
    super(props);
    this.goToTest = this.goToTest.bind(this);
    this.startCaptchaRequest = this.startCaptchaRequest.bind(this);
    this.captchaRef = React.createRef();
  }

  goToTest() {
    this.props.history.push('/demographics');
  }

  startCaptchaRequest() {
    this.captchaRef.current.execute();
  }

  render() {
    localStorage.removeItem('scores');
    return (
      <div className="main-container">
        <Header />
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h2>FEEL FIRST TEST</h2>

                <h3 className={'titleInfo'}>
                  If you FEEL First before you communicate, you'll build stronger relationships
                  through all of your online channels and in-person too. Here are several questions
                  you can ask yourself about Facing your <b>Fears</b>, communicating with
                  <b> Empathy</b>, using <b>Ethics</b> and good judgment and discovering your
                  <b> Love</b> for the mission.
                </h3>

                <h3 className={'titleInfo'}>
                  Business professionals are generally taught to consider their audience, timing,
                  channels, messaging and measurement. However, when you add FEEL to your plan,
                  your communications will resonate and your relationships will grow stronger with
                  the people that matter.
                </h3>
              </div>
              <div className={'col-12 col-sm-6'}>
                <img src={feel} alt="FEEL" />
                <h3 className={'titleInfo'}>The Feel First Test is currently in Beta.</h3>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div>
          <Button onClick={this.startCaptchaRequest} className="btn btn-lg btn-info">Start the FEEL First Test!</Button>
          <ReCAPTCHA
            ref={this.captchaRef}
            sitekey="6LczJbEUAAAAAHkDoUGiRxz8dPBG7wysCSqOUIPG"
            size="invisible"
            onChange={this.goToTest}
          />
        </div>
        <Footer />
      </div>
    );
  }

}
export default withRouter(Main);
