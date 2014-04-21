Template.featuresSearch.events({
  'keyup .search-input input': function(e) {
    Session.set('searchVal', $(e.target).val());}
  });

Template.featuresSearch.helpers({
  inputIsNotEmpty: function() {
    var searchValue = Session.get('searchVal');
    return searchValue && searchValue.length > 0;
  }
});

Template.featuresSearch.events({
  'submit form': function(e) {
    e.preventDefault();

    var feature = {
      title: $(e.target).find('#search').val(),
    };

    var featureId = Features.insert(feature);
    $(e.target).find('#search').val('');
    Session.set('searchVal', '');
  }
});
