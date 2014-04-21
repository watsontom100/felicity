EasySearch.createSearchIndex('features', {
    'collection'    : Features,         // instanceof Meteor.Collection
    'field'         : 'title',    // can also be an array of fields
    'limit'         : 20,
    'use'           : 'mongo-db'         // default: 10
});
