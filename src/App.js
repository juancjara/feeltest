import React, { Component } from 'react';
import feel from './Feel_pic.png';
import './App.css';
import Main from './components/MainComponent';
import Quiz from './components/QuizComponent';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Main} />
                <Route exact path="/FEEL" component={Quiz} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
