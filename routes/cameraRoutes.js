Router.route('/camera', {
  name: 'photo',
  action: function () {
    this.render('photo');

    SEO.set({ title: 'Camera - ' + Meteor.App.NAME });
  }
});
