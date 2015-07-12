Template.home.helpers({
  trashcans: function(){
    return trashcans.find().fetch();
  },
  exampleMapOptions: function() {
   // Make sure the maps API has loaded

   if (GoogleMaps.loaded()) {
     // Map initialization options
     return {
       center: new google.maps.LatLng(37.769105, -122.488583),
       zoom: 18,
       trashcans: function(){
         return trashcans.find().fetch();
       }
     };
   }
 }
});

Template.home.events({

});


Template.home.rendered = function () {
  // We can use the `ready` callback to interact with the map API once the map is ready.
 GoogleMaps.ready('exampleMap', function(map) {
   // Add a marker to the map once it's ready
   var trashcans = map.options.trashcans();

   for (var i in trashcans) {
      var coords = new google.maps.LatLng(trashcans[i].loc.coordinates[1], trashcans[i].loc.coordinates[0])
      var garbageBin = new google.maps.Marker({
        position: coords,
        map: map.instance
      });
   }

     var infowindow = new google.maps.Marker({
        map: map.instance,
        position: new google.maps.LatLng(Geolocation.latLng().lat, Geolocation.latLng().lng),
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      });

 });
};
