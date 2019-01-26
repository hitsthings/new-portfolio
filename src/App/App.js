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
  constructor(){
    super()
    this.state = {
      blue: false,
      red: false,
      green: false,
      yellow: false,
    }
  }

  setBlue = () => {
    this.setState({blue: true})
  }

  setRed = () => {
    this.setState({red: true})
  }

  setGreen = () => {
    this.setState({green: true})

  }

  setYellow = () => {
    this.setState({yellow: true})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Background 
            blue={this.state.blue}
            red={this.state.red}
            yellow={this.state.yellow}
            green={this.state.green}
          />
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
