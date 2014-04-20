Template.featureItem.helpers({
  ownFeature: function() {
    return this.userId == Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

Template.featureItem.events({
  'click .upvote': function(e) {
    e.preventDefault();

    var currentFeatureId = this._id;
    Features.update(currentFeatureId, {$inc : {'votes':1}}, function(error) {
      if (error)
        Errors.throw(error.reason);
    });
  }
});
