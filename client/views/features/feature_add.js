Template.featureAdd.events({
  'submit form': function(e) {
    e.preventDefault();

    var feature = {
      title: $(e.target).find('[name=feature]').val(),
    };

    var featureId = Features.insert(feature);
    Router.go('featuresList');

    // Meteor.call('feature', feature, function(error, id) {
    //   if (error) {
    //     // display the error to the user
    //     Errors.throw(error.reason);
    //
    //     if (error.error == 302)
    //       Router.go('featurePage', {_id: error.details})
    //   } else {
    //     Router.go('featurePage', {_id: id});
    //   }
    // });
  }
});
