Template.featureEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentFeatureId = this._id;

    var featureProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    }

    Features.update(currentFeatureId, {$set: featureProperties}, function(error) {
      if (error) {
        // display the error to the user
        Errors.throw(error.reason);
      } else {
        Router.go('featurePage', {_id: currentFeatureId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this feature?")) {
      var currentFeatureId = this._id;
      Features.remove(currentFeatureId);
      Router.go('featuresList');
    }
  }
});
