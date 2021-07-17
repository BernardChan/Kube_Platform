import { Mongo } from 'meteor/mongo';

// store video links
export const LinksCollection = new Mongo.Collection('links');

// _id
// inputUrl: string, educators input 
// generatedUrl: string, our generated url
// ownerId: string, matches to the uploaderId
// vidTitle: string, free text
// vidLen: int
// course: string, free text
// analyticsId: string, matches to analytics collection


