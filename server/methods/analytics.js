Meteor.methods ({

  'analytics/create': (linkId) => {
  
    const currentUserId = Meteor.userId();

    const data = {
      uploaderId: currentUserId,
      linkId,
      viewCount: 0,
      dropOffCount: 0,
      dropOffPoint: [],
      replayCount: [],
      flags: [],
      createdAt: new Date(),
    }

    return Analytics.insert(data);

  },


  // 'analytics/update': (linkId) => {

});


// _id, string
// linkId: string
// viewCount: int,
// dropOffCount: int, where students stop watching the video
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

