import React, {Component} from 'react';
import {useHistory} from 'react-router-dom';

import "./NavBarStyle.css"

function NavBar() {
  const history = useHistory()

  return (
    <div class = "navBar">
      <div class = "navLink" onClick = {() => {history.push('/Teacher/Dashboard')}}>   Dashboard   </div>
      <div class = "navLink" onClick = {() => {history.push('/Teacher/Generate')}}>   Generate   </div>
    </div>
  );
}

export default NavBar;