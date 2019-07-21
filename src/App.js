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
          <Route exact path="/test/0" component={Quiz} />
          <Route exact path="/test/1" component={Quiz} />
          <Route exact path="/test/2" component={Quiz} />
          <Route exact path="/test/3" component={Quiz} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
