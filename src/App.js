import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';


import './App.css';

import About from './components/AboutComponent';
import Main from './components/MainComponent';
import Quiz from './components/QuizComponent';
import Result from './components/ResultComponent';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App container">
          <Route exact path="/" component={Main} />
          <Route exact path="/FEEL" component={Quiz} />
          <Route exact path="/Result" component={Result} />
          <Route exact path="/About" component={About} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
