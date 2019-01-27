import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Header/header';
import About from '../About/about';
import Projects from '../Projects/projects';
import Experience from '../Experience/experience';
import Contact from '../Contact/contact';
import Background from './background';
import './app.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header 
            setBlue={this.setBlue}
            setRed={this.setRed}
            setGreen={this.setGreen}
            setYellow={this.setYellow}
          />
          <main>
            <Switch>
              <Route exact path='/about' component={About}/>
              <Route exact path='/projects' component={Projects}/>
              <Route exact path='/experience' component={Experience}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
