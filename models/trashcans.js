trashcans = new Mongo.Collection('trashcans');

trashcans.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    loc: {
      type: Object
    },
    "loc.coordinates": {
      type: [Number],
      optional: true,
      decimal: true
    },
    "loc.type": {
      type: String
    },
    picture: {
      type: Object
    },
    "picture.url": {
      type: String
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  trashcans.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
