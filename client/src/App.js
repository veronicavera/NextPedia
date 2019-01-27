import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { FlightFinder, Landing, User, UserDashboard } from './components/pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/test' component={Home} />
          <Route exact path='/user' component={User} />
          <Route exact path='/flightFinder' component={FlightFinder} />
        </Switch>
      </Router>
    );
  }
}

export default App;
