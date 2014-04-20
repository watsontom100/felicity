Template.featureSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var feature = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }

    Meteor.call('feature', feature, function(error, id) {
      if (error) {
        // display the error to the user
        Errors.throw(error.reason);

        if (error.error == 302)
          Router.go('featurePage', {_id: error.details})
      } else {
        Router.go('featurePage', {_id: id});
      }
    });
  }
});
