import { Meteor } from 'meteor/meteor';
import { LinksCollection, Analytics } from '/lib/collections/collections.js';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  

});
