import React from 'react';
import { Switch, Route, } from 'react-router-dom'

import Home from './components/Home/Home.jsx';

import Login from './components/Teacher/Login/Login.jsx'
import Register from './components/Teacher/Register/Register.jsx'
import Dashboard from './components/Teacher/Dashboard/Dashboard.jsx'
import Generate from './components/Teacher/Generate/Generate.jsx'
import Preview from './components/Teacher/Preview/Preview.jsx'

import Theatre from './components/Student/Theatre/Theatre.jsx'
import Survey from './components/Student/Survey/Survey.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx';

export const App = () => (
  <div>
    <Sidebar />
    <Switch>
      <Route
        exact path="/"
        component={Home}
        key="home"
      />
      {/* Teachers stuff */}
      <Route
        exact path="/Teacher"
        component={Login}
        key="login"
      />
      <Route
        exact path="/Teacher/Register"
        component={Register}
        key="register"
      />
      <Route
        exact path="/Teacher/Dashboard"
        component={Dashboard}
        key="dashboard"
      />
      <Route
        exact path="/Teacher/Generate"
        component={Generate}
        key="generate"
      />
      <Route
        exact path="/Teacher/Preview"
        component={Preview}
        key="preview"
      />
      {/* Students stuff */}
      <Route
        exact path="/Theatre/:teacherID"
        component={Theatre}
        key="theatre"
      />
      <Route
        exact path="/Survey/:teacherID/:videoID"
        component={Survey}
        key="survey"
      />
    </Switch>
  </div>
);
