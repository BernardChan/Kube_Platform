import { Mongo } from 'meteor/mongo';

// analytics data
export const Analytics = new Mongo.Collection('analytics');

// _id, string
// linkId: string
// viewCount: int,
// dropOff: int, where students stop watching the video
    // when the window is closed or when a video is on pause for more than 1hr
// dropOffPoint: arr of obj
    // replays: arr of obj
// flags: arr of obj [
  // {timestamp: 0:00-1:00
  //   flagCount: 20,
  //   },
  //   {timestamp: 10:00-11:00
  //     flagCount: 20,
  //     },
  // ]

// how to track

// replay - @souper
// flags - take video timestamp, mod by 180, chuck into array of objective
// dropOff - if window close, if away from window > video length * 1.5
// dropOffPoint - if above condition, add timestamp to array of objects

