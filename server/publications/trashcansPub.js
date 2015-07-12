Meteor.publish('trashcans', function () {
  return trashcans.find();
});
