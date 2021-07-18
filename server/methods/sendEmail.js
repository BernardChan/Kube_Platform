Meteor.methods({
  'email/send': ({
    email,
  }) => {
    console.log(email)
    if (email == undefined) return
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(Meteor.settings.private.sendGridApiKey)
    const msg = {
      to: email, // Change to your recipient
      from: 'william.liu142@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  }
})