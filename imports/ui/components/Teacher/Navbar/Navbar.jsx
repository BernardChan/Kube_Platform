import React, {Component} from 'react';
import {useHistory} from 'react-router-dom';

import "./NavBarStyle.css"

function NavBar() {
  const history = useHistory()

  return (
    <div>
      <div class = "navBar">
        <div class = "navLink" onClick = {() => {history.push('/Teacher/Dashboard')}}>   
          <span>

          Dashboard   
          </span>
        </div>
        <div class = "navLink" onClick = {() => {history.push('/Teacher/Generate')}}>   
          <span>
          Generate   
          </span>
        </div>
      </div>
      <img class = "logoStyle" src="/assets/logo.png" />  
    </div>
  );
}

export default NavBar;