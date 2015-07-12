Router.route('/trashlist', {
  name: 'trashlist',
  waitOn: function() {
    return Meteor.subscribe('nearbyTrashcans');
  },
  action: function () {
    this.render('trashList');
    SEO.set({ title: 'Trashlist - ' + Meteor.App.NAME });
  }
});
