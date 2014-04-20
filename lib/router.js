Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('features'); }
});

Router.map(function() {
  this.route('featuresList', {path: '/'});

  this.route('featureAdd', {
    path: '/add'
  });

  // this.route('featurePage', {
  //   path: '/features/:_id',
  //   data: function() { return Features.findOne(this.params._id); }
  // });
  //
  // this.route('featureEdit', {
  //   path: '/features/:_id/edit',
  //   data: function() { return Features.findOne(this.params._id); }
  // });
  //
  // this.route('featureSubmit', {
  //   path: '/submit'
  // });
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor. loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');

    pause();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'featureSubmit'});
Router.onBeforeAction(function() { Errors.clearSeen(); });
