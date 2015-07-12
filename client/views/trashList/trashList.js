Template['trashList'].helpers({
  trashcans: function(){
    return trashcans.find().fetch();
  }

});

Template['trashList'].events({
  'click .artist-listpic': function(){
         return trashcans.update(this._id, {$set: {full: true}});
    }
});
