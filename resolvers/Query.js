
module.exports = {

    totalPhotos: (parent, args, { db }) =>
        db.collection('photos')
            .estimatedDocumentCount(),

    totalFlights: (parent, args, { db }) =>
        db.collection('flights')
            .estimatedDocumentCount(),

    allPhotos: (parent, args, { db }) =>
        db.collection('photos')
            .find()
            .toArray(),

    allFlights: (parent, args, { db }) =>
        db.collection('flights')
            .find()
            .toArray(),

    totalUsers: (parent, args, { db }) =>
        db.collection('users')
            .estimatedDocumentCount(),

    allUsers: (parent, args, { db }) =>
        db.collection('users')
            .find()
            .toArray(),

    me: (parent, args, { currentUser }) => currentUser
}