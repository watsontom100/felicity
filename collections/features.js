Features = new Meteor.Collection('features');

Features.allow({
  insert: function(userId, doc) {
    return !! userId;
  },
  update: function(userId, doc) {
    return !! userId;
  }
});
