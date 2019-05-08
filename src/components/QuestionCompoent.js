import React, { Component } from 'react';


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "noneselected",
        };
        this.score = {'Never': 1, 'Rarely': 2, 'Sometimes': 3, 'Often': 4, 'Always': 5};
        this.RenderRating = this.RenderRating.bind(this);
    }

    handleOptionChange = changeEvent => {
        console.log(changeEvent.target.value);
        this.setState({
            selectedOption: changeEvent.target.value
        });
        this.props.onChange(this.props.id, this.score[changeEvent.target.value]);
        console.log(this.props.CSV + 'CDV');
    };

    RenderRating(displayOption) {

        return (
            <div className="form-check col-md-2">
                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value={displayOption}
                        checked={this.state.selectedOption === displayOption && this.props.reload === false}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    <span className="checkmark"></span>
                    <p className="option">{displayOption}</p>
                </label>

            </div>
        );
    }

    render() {
        return (

            <div className="row">
                <h4>{this.props.number + '.) ' + this.props.question_text}</h4>
                <form className="form-inline questions">
                    <div className="row">
                        <div className={"col-md-1"}/>
                        {this.RenderRating("Never")}
                        {this.RenderRating("Rarely")}
                        {this.RenderRating("Sometimes")}
                        {this.RenderRating("Often")}
                        {this.RenderRating("Always")}
                    </div>
                </form>
            </div>

        )
    }
}
export default Question;