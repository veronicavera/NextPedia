import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { FlightFinder, Landing, User, FAQ, About, Contact, Navigation} from './components/pages';
import SignUpPage from './components/pages/SignUp'
import SignInPage from './components/pages/SignIn';
import { MenuBar, Footer } from './components';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/test' component={Home} />
            <Route exact path='/user' component={User} />
            <Route exact path='/flightFinder' component={FlightFinder} />
            <Route exact path='/FAQ' component={FAQ} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/signin' component={SignInPage} />
            <Route exact path='/signup' component={SignUpPage} />
          </Switch>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
