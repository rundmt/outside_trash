Meteor.publish('nearbyTrashcans', function () {
  return trashcans.find( {"loc.coordinates": { $near : { $geometry: { type: "Point",  coordinates: [ -122.488513, 37.769402 ] }, $minDistance: 0, $maxDistance: 100}}})
});
