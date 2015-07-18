Template['trashList'].helpers({
  trashcans: function(){
    return trashcans.find().fetch();
  }

});

Template['trashList'].events({
  'click .artist-listpic': function(){
  		var r = confirm("Are you sure this trashcan is full?");
		if (r == true) {
		    return trashcans.update(this._id, {$set: {full: true}});
		}  else {
      console.log("false")
			return trashcans.update(this._id, {$set: {full: false}});
		}       
    }
});

