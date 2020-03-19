import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Reports from './pages/Reports/Reports';
import Profile from './pages/Profile/Profile';
import Schedule from './pages/Schedule/Schedule';
import Barbershops from './pages/Barbershops/Barbershops'

export default function MainRoutes() {

  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Login} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/schedule" exact component={Schedule} />
        <Route path="/barbershops" exact component={Barbershops} />
      </Switch>
    </Router>
  )
}