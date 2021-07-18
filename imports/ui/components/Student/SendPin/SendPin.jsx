import React, { useState } from 'react';
import './SendPin.css'

function SendPin (props) {
  const [email, setEmail] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const emailPins = () => {
    const data = {
      "email": email,
      "flags": sessionStorage.getItem(props.match.params.teacherID)
    }
    console.log(data)
    Meteor.call('email/send', data)
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-12">


          <div>


            <h1>Send Video Pins to yourself</h1>

            <form class="form register-form justify-content-center">

              <div class="form-group">

                <label htmlFor="email">
                  Email
          </label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  class="form-control"
                  onChange={handleEmail}
                />
              </div>

              <div class="form-group">
                <button
                  class="btn btn-lg btn-primary" id="submit" type="submit"
                  onClick={emailPins}
                >
                  Send now</button>
              </div>



            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendPin;
