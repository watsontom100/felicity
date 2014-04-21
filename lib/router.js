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
});

Router.onBeforeAction('loading');
Router.onBeforeAction(function() { Errors.clearSeen(); });
