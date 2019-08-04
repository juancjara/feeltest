import React, {Component} from 'react';
import {Markup} from 'interweave';


class Question extends Component {
  constructor(props) {
    super(props);
    this.textToScore = {
      Never: 1, Rarely: 2, Sometimes: 3, Often: 4, Always: 5,
    };
    this.scoreToText = {
      1: 'Never', 2: 'Rarely', 3: 'Sometimes', 4: 'Often', 5: 'Always',
    };
    let savedAnswer = '';
    if (props.savedAnswer !== undefined) {
      savedAnswer = this.scoreToText[props.savedAnswer];
    }
    this.state = {
      selectedOption: savedAnswer,
    };
    this.RenderRating = this.RenderRating.bind(this);
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
    this.props.onChange(this.props.id, this.textToScore[changeEvent.target.value]);
  };

  RenderRating(displayOption) {
    return (
      <div className="form-check col-md-2">
        <label>
          <input
            type="radio"
            name="react-tips"
            value={displayOption}
            checked={this.state.selectedOption === displayOption}
            onChange={this.handleOptionChange}
            className="form-check-input"
          />
          <span className="checkmark" />
          <p className="option">{displayOption}</p>
        </label>

      </div>
    );
  }

  render() {
    return (
      <div className="row">
        <h4 className="question"><Markup content={`${this.props.number}.) ${this.props.question_text}`} /></h4>
        <form className="form-inline questions">
          <div className="row">
            <div className="col-md-1" />
            {this.RenderRating('Never')}
            {this.RenderRating('Rarely')}
            {this.RenderRating('Sometimes')}
            {this.RenderRating('Often')}
            {this.RenderRating('Always')}
          </div>
        </form>
      </div>

    );
  }
}
export default Question;
