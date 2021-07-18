import React from 'react';
import { Link} from 'react-router-dom';
import './register.css';

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [userType, setUserType] = React.useState('teacher');

  const submit = () => {
    data = {
      "email": email,
      "password": password, 
      "firstName": firstName,
      "lastName": lastName,
      "userType": userType,
    }
    
    console.log(data)
    
    Accounts.createUser(data);    
 
    console.log(`created new user!`);
    
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
 
                <div class="row justify-content-center">
                  <div class="form-group long">
                  <label htmlFor = "firstName">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    id="firstName"
                    class="form-control"
                    onChange = {e => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div>
              <div class="row justify-content-center">
                <div class="form-group long">
                  <label htmlFor = "lastName">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    id="lastName"
                    class="form-control"
                    onChange = {e => setLastName(e.target.value)}
                  />
                </div>
              </div>
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
              <div class="row justify-content-center">
                <div class="form-group long">
                  <label htmlFor = "userType">
                    User Type: 
                  </label>
                  <select
                    class="form-control"
                    value = {userType}
                    onChange = {e => setUserType(e.target.value)}
                  >
                    <option value = 'teacher'> Teacher </option>
                    <option value = 'student'> Student </option>
                  </select>
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
                Register Now → 
              </button>
            </Link>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="form-group">
          <div id="login">
            <Link to ="/Teacher">
              Log In                
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;