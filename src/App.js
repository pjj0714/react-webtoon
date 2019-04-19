import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './container/Main';
import Viewer from './container/Viewer';
import WebToonHome from './container/WebToonHome';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/webtoon/:webtoonId" component={WebToonHome} />
          <Route path="/viewer/:viewerId" component={Viewer} />
        </div>
      </Router>
    );
  }
}

export default App;
