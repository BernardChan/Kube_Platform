Meteor.methods ({

  'links/generate': ({
    inputUrl,
    vidTitle,
    vidLen,
    course,
    
  }) => {
    
    // create basic link record
    const currentUserId = Meteor.userId();

    const data = {
      inputUrl,
      ownerId: currentUserId,
      vidTitle,
      vidLen,
      course,
      createdAt: new Date(),
    }
    const linkId = LinksCollection.insert(data);
    
  
    // Update new link record with analytics and generated URL
    
    // generate URL
    console.log(Meteor.absoluteUrl())
    const generatedUrl = `${Meteor.absoluteUrl()}/theatre/${currentUserId}/${linkId}/${data.inputUrl}`
        
    // generate corresponding analytics item
    const analyticsId = Meteor.call('analytics/create', linkId)

    LinksCollection.update(linkId,
      {
        $set: {
          analyticsId,
          generatedUrl,

        }
      })

    const newLink = LinksCollection.findOne(linkId);
    return newLink.generatedUrl;
    
  },
  
});