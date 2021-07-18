import React, { useState } from 'react';

function SendPin (props) {
  const [email, setEmail] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const emailPins = () => {
    const data = {
      "email": email
    }
    console.log(data)
    Meteor.call('email/send', data)
  }

  return (
    <div>
      <h1>Send Video Pins to yourself</h1>
      <h2>Email Address</h2>
      <input
        type='text'
        onChange={handleEmail}
      />
      <button
        onClick={emailPins}
      >Send now</button>

      <button>Schedule for later</button>
      <button>Calendar component</button>
    </div>
  );
}

export default SendPin;
