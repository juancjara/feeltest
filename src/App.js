import React, { Component } from 'react';
import feel from './Feel_pic.png';
import './App.css';
import Main from './components/MainComponent';
import Quiz from './components/QuizComponent';
import Result from './components/ResultComponent';
import About from './components/AboutComponent'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App container-fluid">
                <Route exact path="/" component={Main} />
                <Route exact path="/FEEL" component={Quiz} />
                <Route exact path="/Result" component={Result} />
                <Route exact path="/About" component={About} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
