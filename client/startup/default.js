Meteor.startup(function () {
  trashcans._ensureIndex({'loc.coordinates':'2dsphere'});  
});
