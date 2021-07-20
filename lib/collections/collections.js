import { Mongo } from 'meteor/mongo';

LinksCollection = new Mongo.Collection('links');
Analytics = new Mongo.Collection('analytics');

export {
  LinksCollection,
  Analytics,

}