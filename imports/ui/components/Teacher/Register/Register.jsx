import React from 'react';
import { Link} from 'react-router-dom';

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [userType, setUserType] = React.useState('');

  const submit = () => {
    data = {
      "email": email,
      "password": password, 
      "firstName": firstName,
      "lastName": lastName,
      "userType": userType,
    }
    
    console.log(data)
    
    // const {
    //   error, result,
    // } = 
    Accounts.createUser(data);    

    // if (error) {
    //   throw new Meteor.Error(400, 'Bad Request');
    // }    
    console.log(`created! ${Meteor.userId()}`);
    
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor = "email">
            Email:
          </label>
          <input
            name="email"
            type="text"
            id="email"
            onChange = {e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor = "firstName">
            First Name:
          </label>
          <input
            name="firstName"
            type="text"
            id="firstName"
            onChange = {e => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor = "lastName">
            Last Name:
          </label>
          <input
            name="lastName"
            type="text"
            id="lastName"
            onChange = {e => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor = "password">
            Password:
          </label>
          <input
            name="password"
            type="text"
            id="password"
            onChange = {e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor = "userType">
            User Type: 
          </label>
          <select
            value = {userType}
            onChange = {e => setUserType(e.target.value)}
          >
            <option value = 'teacher'> Teacher </option>
            <option value = 'student'> Student </option>
          </select>
        </div>
      </form>
      <div>
        <Link to="/Teacher/dashboard">
          <button id = "submit" onClick = {submit} type = "submit">Submit</button>
        </Link>
      </div>
      <div>
        <Link to ="/Teacher">
          <button>Return to Log In</button>
        </Link>
      </div>
    </div>
  )
}

export default Register;