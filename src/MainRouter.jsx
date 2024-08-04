import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Home page
import About from './pages/About'; // About page
import Rosters from './pages/Rosters'; // Rosters page
import Pricing from './pages/Pricing'; // Pricing page
import Contact from './pages/Contact'; // Contact page
import SignUp from './pages/SignUp'; // Sign Up page

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/about" component={About} />
        <Route path="/rosters" component={Rosters} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={SignUp} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default MainRouter;

