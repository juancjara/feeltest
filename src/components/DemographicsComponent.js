import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

import Footer from './FooterComponent';
import Header from './HeaderComponent';


class Demographics extends Component {
  constructor(props) {
    super(props);
    this.goToTest = this.goToTest.bind(this);
    const demographicData = require('../static_data/DemographicData.json');
    this.questions = demographicData.questions;

    window.scrollTo(0, 0);
  }

  goToTest() {
    this.props.history.push('/test/0');
  }

  renderDemographicQuestions = () => {
    /* dynamically create jsx based off of json input */
    const result = [];
    for (let i = 0; i < this.questions.length; i++) {
      const curQuestion = this.questions[i];
      const choices = [];
      result.push(<h3>{curQuestion.question}</h3>);
      for (let j = 0; j < curQuestion.choices.length; j++) {
        choices.push(
          <FormGroup check>
            <Label check className={'demographic-text'}>
              <Input className={'demographic-radio'} type="radio" name={'radio' + i} />
              {' ' + curQuestion.choices[j] + ' '}
            </Label>
          </FormGroup>);
      }
      result.push(choices);
    }
    return result;
  };

  render() {
    return (
      <div className={'demographic-container'}>
        <Header />
        <h2>Demographic Information</h2>
        <div className={'demographic-questions'}>
          <Form className={'demographic-form'}>
            <h3>What is your Age?</h3>
            <FormGroup>
              <Input type="number" className={"demographic-number"}/>
            </FormGroup>
            {this.renderDemographicQuestions()}
          </Form>
        </div>
        <Button onClick={this.goToTest} className="btn btn-lg btn-info">Continue to the FEEL First Test!</Button>
        <Footer />
      </div>
    );
  }

}
export default Demographics;
