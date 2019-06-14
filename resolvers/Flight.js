
module.exports = {

    postedBy: (parent, args, { db }) =>

        db.collection('users')
            .findOne({ githubLogin: parent.userID })
}