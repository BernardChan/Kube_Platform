import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

import { Switch, Route, } from 'react-router-dom'
import Home from './components/Home/Home.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
    <Switch>
      <Route
        exact path="/Home"
        component={Home}
        key="home"
      />
    </Switch>
  </div>
);
