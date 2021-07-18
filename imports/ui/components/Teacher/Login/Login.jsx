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
    <div class="container">
      <section>
      <div class="row justify-content-center">
        <img src="/assets/landing-logo.png" class="logo"/>
      </div>
      </section>
      <section>
        <div class="row justify-content-center">
          <div class="col-12">

            <form class="form register-form justify-content-center">
              <div class="row justify-content-center">
                  <div class="form-group long">
                    <label htmlFor = "email">
                    Email
                  </label>
                  <input
                    name="email"
                    type="text"
                    id="email"
                    class="form-control"
                    onChange = {e => setEmail(e.target.value)}
                  />
                  </div>
                </div>
              <div>
              <div class="row justify-content-center">
                <div class="form-group long">
                  <label htmlFor = "password">
                    Password:
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    class="form-control"
                    onChange = {e => setPassword(e.target.value)}
                  />
                </div>
              </div>
              </div>
            </form>
            </div>
          </div>
        </section>
      <div class="row justify-content-center">
        <div class="form-group">
            <Link to="/Teacher/Generate">
              <button class="btn btn-lg btn-primary" id="submit" onClick = {submit} type = "submit">
                Log In 
              </button>
            </Link>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="form-group">
          <div id="login">
            <Link to ="/Teacher/Register">
              New User             
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
