Router.route('/', {
  name: 'home',
  waitOn: function() {
    return Meteor.subscribe('trashcans');
  },
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['home'] });
