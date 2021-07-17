import React from 'react';
import { Link } from 'react-router-dom';

function Login () {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  

  const submit = () => {
    loginBody = {
      "email" : email,
      "password" : password
    }
    console.log(loginBody)
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor = "email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            onChange = {e => setEmail(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor = "password">
            Password:
          </label>
          <input
            type="text"
            id="password"
            onChange = {e => setPassword(e.target.value)}
            />
        </div>
        <Link to="/Teacher/Dashboard">
          <button id = "submit" onClick={submit} >Submit</button>
        </Link>
      </form>
      <Link to="/Teacher/Register">
          <button id = "register">Register</button>
      </Link>
    </div>
  );
}

export default Login;
