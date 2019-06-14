module.exports = {

    postedPhotos: (parent, args, { db }) =>
        db.collection("photos")
            .find({ userID: parent.githubLogin })
            .toArray(),

    inPhotos: parent => tags

        // Returns an array of tags that only contain the current user
        .filter(tag => tag.userID === parent.id)

        // Converts the array of tags into an array of photoIDs
        .map(tag => tag.photoID)

        // Converts array of photoIDs into an array of photo objects
        .map(photoID => photos.find(p => p.id === photoID))
}