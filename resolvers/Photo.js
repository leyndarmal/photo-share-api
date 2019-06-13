
module.exports = {

    id: parent => parent.id || parent._id,
    url: parent => `/img/photos/${parent._id}.jpg`,
    postedBy: (parent, args, { db }) =>
        db.collection('users')
            .findOne({ githubLogin: parent.userID }),

    taggedUsers: parent => tags

        // Returns an array of tags that only contain the current photo
        .filter(tag => tag.photoID === parent.id)

        // Converts the array of tags into an array of userIDs
        .map(tag => tag.userID)

        // Converts array of userIDs into an array of user objects
        .map(userID => users.find(u => u.githubLogin === userID))
}