Features = new Meteor.Collection('features');

Features.allow({
  insert: function(userId, doc) {
    return !! userId;
  },
  update: function(userId, doc) {
    return !! userId;
  }
});

// Features.allow({
//   update: ownsDocument,
//   remove: ownsDocument
// });
//
// Features.deny({
//   update: function(userId, feature, fieldNames) {
//     // may only edit the following two fields:
//     return (_.without(fieldNames, 'url', 'title').length > 0);
//   }
// });
//
// Meteor.methods({
//   feature: function(featureAttributes) {
//     var user = Meteor.user(),
//       featureWithSameLink = Features.findOne({url: featureAttributes.url});
//
//     // ensure the user is logged in
//     if (!user)
//       throw new Meteor.Error(401, "You need to login to post new features");
//
//     // ensure the feature has a title
//     if (!featureAttributes.title)
//       throw new Meteor.Error(422, 'Please fill in a title');
//
//     // check that there are no previous features with the same link
//
//     if (featureAttributes.url && featureWithSameLink) {
//       throw new Meteor.Error(302,
//         'This link has already been posted',
//         featureWithSameLink._id);
//     }
//
//     // pick out the whitelisted keys
//     var feature = _.extend(_.pick(featureAttributes, 'url', 'title', 'message'), {
//       userId: user._id,
//       author: user.username,
//       submitted: new Date().getTime()
//     });
//
//     var featureId = Features.insert(feature);
//
//     return featureId;
//   }
// });
