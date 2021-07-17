Meteor.methods ({

  // add new user to the database
  'users/createNewUser': ({
    email,
    password,
    firstName,
    lastName,
    userType, // Currently default set to educator
  }) => {

    check(email, String);
    check(password, String);
    check(firstName, String);
    check(lastName, String);
    check(userType, String);

    const data = {
      email: email,
      password: password, //TODO: add security to password haha
      firstName: firstName,
      lastName: lastName,
      userType: userType,
    }

    const {
      error, result,
    } = Accounts.createUser(data);

    if (error) {
      throw new Meteor.Error(400, 'Bad Request');
    }    
    console.log(result);

    return result
  },

  // TODO: Update user fields?

  'users/delete': ({userId, password}) => {

    check(email, String);
    check(password, String);

    const currentUser = Meteor.user();
    if (Meteor.isDevelopement) console.log(currentUser);

    if ((currentUser.password == password) && (currentUser._id == userId)) {

      Users.update(userId,
        {
          $set: {
            deleted: true}
        })

    }

    return data;
    
  },

})

