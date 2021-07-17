import React from 'react';
import { Switch, Route, } from 'react-router-dom'
import Home from './components/Home/Home.jsx';

export const App = () => (
  <div>
    <div>Header bar here</div>
    <Switch>
      <Route
        exact path="/Home"
        component={Home}
        key="home"
      />
    </Switch>
  </div>
);
