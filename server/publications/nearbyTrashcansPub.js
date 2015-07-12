Meteor.publish('nearbyTrashcans', function () {
  return trashcans.find( {"loc.coordinates": { $geoWithin: { $centerSphere: [ [ -122.488513, 37.769402 ], .01/3963.2 ] } }})
});
