Meteor.methods ({

  // TODO: Update user fields?

  'users/delete': ({userId, password}) => {

    // check(email, String);
    // check(password, String);

    const currentUser = Meteor.user();
    console.log(currentUser);

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

