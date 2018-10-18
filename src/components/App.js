import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Hero } from "@front10/landing-page-book/dist/components";

import Home from './Home';
import Nav from './Navbar';
import About from './About';
import Chatbots from './Chatbots';
import Contact from './Contact';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/chatbots' component={Chatbots} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  }
}

export default App;
