import React, { Component } from 'react';
import Footer from "./FooterComponent";
import feel from "../Feel_pic.png";
import { withRouter } from 'react-router-dom'
import Question from "./QuestionCompoent";
import {Button} from 'reactstrap';
import Header from "./HeaderComponent";


class Quiz extends Component {

    constructor(props) {
        super(props);
        //TODO import these from a static file
        this.questions = ['Do you take time every day to learn something new in your professional role (i.e.using technology, working with a new team)?\n',
        'Do you take time every day to learn something personally related to your interests/hobby?\n',
        'How open (meaning how much you listen and engage to learn more) are you to another person’s perspective at work about work-related topics?\n',
        'How open (meaning how much you listen and engage to learn more) are you to another person’s perspective when sharing an opinion about your personal growth and development?\n',
        'Do you step out of your comfort zone to try new activities at work?\n',
        'Do you step out of your comfort zone to try new personal endeavors that you’ve never tried before in your free time?\n',
        'Do you “accept” what someone tells you on the surface, or do you dig deeper to ask questions about what you’re being told?',
        'Do you take the time to get to know someone after you connect on social media?\n',
        'Do you listen actively as people are sharing information with you (as in, you take notes, ask follow-up questions, repeat back what they’v shared, etc.)?\n',
        'When someone shares a challenging experience with you, do you take time away from your intended discussion to help them?\n',
        'When someone shares a challenging experience with you, do you listen and share something that’s happened to you that’s difficult to manage?\n',
        'How much do you go beyond social media to learn about someone before you engage with them?\n',
        'Are you objective (without sharing your biased opinion or your company\'s) about the information you share on social media?\n',
        'Is your communication accurate (meaning you always check the  credibility of the source you’re using) when you share professionally?\n',
        'Is your communication accurate (meaning you always check the  credibility of the source you’re using) when you share personally?\n',
        'Is your communication fair (meant to help without any harmful repercussions from the communication) to all of the parties who are intended to receive the information?\n',
        'Do you exaggerate (embellish facts or details of a situation) to make your story more compelling professionally?\n',
        'Do you exaggerate  (embellish facts or details of a situation) to make your story more compelling personally?\n',
        'How much do you believe and support the mission or cause that you’re sharing?\n',
        'Do your professional peers think you are passionate about your work goals?\n',
        'Do your close contacts (as in friends and family) think you are passionate about your personal goals?\n',
        'Do you share information about your work with enthusiasm on social media?\n',
        'Do you share information about your personal achievements with excitement on social media?\n',
        'Do people engage with you on social media (i.e. they ask questions, like your posts, re-share) when you discuss work initiatives? \n',];
        this.titles = ['Part I: Face Fears', 'Part II: Engage with Empathy', 'Part III: Use Ethics',
            'Part IV: Unleash the Love of Your Mission'];
        this.scoreReverse= {1: 'Never', 2: 'Rarely', 3: 'Sometimes', 4: 'Often', 5: 'Always'};
        console.log('contrusctor called');
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
        console.log(this.scoreArr);
        return (
            <div className={'quiz-container ' + 'bg' + this.state.currentSection}>
                <Header/>
                <div className={"one"}>

                    {this.currentQuestions(this.state.currentSection, this.state.reload)}
                </div>
                <div>
                    {this.DyanmicButton(this.state.currentSection)}
                </div>
                <Footer/>
            </div>

        )
    }


    handleQuestionChange = event => {
        console.log(event);
        let exit = false;
        for(let i = this.state.currentSection*6; i < this.state.currentSection*6 + 6; i++){
            if(this.scoreArr[i] === undefined){
                exit = true;
                break;
            }
        }
        if(exit){
            alert('please select an answer for all questions');
        } else {
            if (event === 'prev') {
                this.setState({
                    currentSection: this.state.currentSection - 1
                });
            } else if (event === 'next') {
                this.setState({
                    currentSection: this.state.currentSection + 1
                });
            } else if (event === 'fin') {
                let finalScore = 0;
                for(let i = 0; i < 24; i++){
                    if(this.scoreArr[i]) finalScore += this.scoreArr[i];
                }
                this.props.history.push({
                    pathname: '/Result',
                    state: { score: finalScore }
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
        }
    };

    handleOptionChange(id, event) {
        switch (id) {
            case 0:
                this.setState({
                    reload0: false
                });
                break;
            case 1:
                this.setState({
                    reload1: false
                });
                break;
            case 2:
                this.setState({
                    reload2: false
                });
                break;
            case 3:
                this.setState({
                    reload3: false
                });
                break;
            case 4:
                this.setState({
                    reload4: false
                });
                break;
            case 5:
                this.setState({
                    reload5: false
                });
                break;
            default:
        }
        console.log(id + '       ' + event);
        this.scoreArr[(this.state.currentSection * 6) + id] = event;
    }


    //Button that will change dynamically based on what question set the user is currently looking at.
    DyanmicButton(currentSection) {
        console.log(currentSection);
        if (currentSection === 3) {
            return (
                <Button onClick={() => this.handleQuestionChange('fin')} className='btn btn-lg btn-info'>Submit</Button>
            );
        } else {
            return (
                <Button onClick={() => this.handleQuestionChange('next')} className='btn btn-lg btn-info'>Next</Button>
            );
        } /*else {
            return (
                <div className="row">
                    <div className="col-sm-6">
                        <Button onClick={() => this.handleQuestionChange('prev')} className='btn btn-lg btn-info'>Go Back</Button>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={() => this.handleQuestionChange('next')} className='btn btn-lg btn-info'>Next</Button>
                    </div>
                </div>
            );
        } */

    }


    currentQuestions(currentSection) {
        return (
            <div>
                <h1>{this.titles[currentSection]}</h1>
                <Question reload={this.state.reload0}
                          question_text={this.questions[(currentSection * 6)]}
                          id={0}
                          onChange={this.handleOptionChange}/>
                <Question reload={this.state.reload1}
                          question_text={this.questions[(currentSection * 6) + 1]}
                          id={1}
                          onChange={this.handleOptionChange}/>
                <Question reload={this.state.reload2}
                          question_text={this.questions[(currentSection * 6) + 2]}
                          id={2}
                          onChange={this.handleOptionChange}/>
                <Question reload={this.state.reload3}
                          question_text={this.questions[(currentSection * 6) + 3]}
                          id={3}
                          onChange={this.handleOptionChange}/>
                <Question reload={this.state.reload4}
                          question_text={this.questions[(currentSection * 6) + 4]}
                          id={4}
                          onChange={this.handleOptionChange}/>
                <Question reload={this.state.reload5}
                          question_text={this.questions[(currentSection * 6) + 5]}
                          id={5}
                          onChange={this.handleOptionChange}/>
            </div>
        );
    }
}

export default Quiz;