import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Header/header';
import About from '../About/about';
import Project from '../Projects/projects';
import Experience from '../Experience/experience';
import Contact from '../Contact/contact';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/about' /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
