import React, { Component } from 'react';


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "option1"
        };
        this.RenderRating = this.RenderRating.bind(this);
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        console.log("You have submitted:", this.state.selectedOption);
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
                    <span className="checkmark"></span>
                    {displayOption}
                </label>

            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>{this.props.question_text}</h3>
                    <form className="form-inline questions" onSubmit={this.handleFormSubmit}>
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
            </div>
        )
    }
}
export default Question;