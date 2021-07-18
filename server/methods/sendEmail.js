import {HTTP} from 'meteor/http';

Meteor.methods({
  'email/send': ({
    email,
    flags,
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
      html: flags,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent!')
      })
      .catch((error) => {
        console.error(error)
      })
  },

  'email/report': () => { //TODO: send link params to get analytics data

    const currentUser = Meteor.user();
    if (!currentUser || currentUser === undefined) throw Meteor.error('No user detected');

    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(Meteor.settings.private.sendGridApiKey)

    const templateData = {
      firstName: currentUser.firstName,
      vidTitle: 'Intro to Mobile Apps',

    }

    HTTP.post(Meteor.settings.private.sendGridApiKey, {
      headers: {
        'Content-Type': 'application/json',
      },
      from: {
        email: "admin@kubo.io"
      },
     "personalizations":[
        {
           "to":[
              {
                 email: currentUser.emails.address                 
              }
           ],
           dynamic_template_data: templateData
        }
     ],
     templateId: 'd-709736db61e247aca77b49a86e0b82b5'
    
    }, callback);
    
  },

})