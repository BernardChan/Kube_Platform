import { Mongo } from 'meteor/mongo';

// users data
export const Users = new Mongo.Collection('users');

// data struct
// _id: string
// email: string
// password
// firstName, lastName
// userType: admin (teacher), student //for the feature
