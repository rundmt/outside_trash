function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  trashcans._ensureIndex({'loc.coordinates':'2dsphere'});
  //loadFixture(Fixtures['dummyFixture'], DummyCollection);
});
