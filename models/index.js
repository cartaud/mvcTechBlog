const Comments = require('./Comments');
const Post = require('./Post');
const User = require('./User');

Comments.belongsTo(Post, {
    foreignKey: 'postId'
});

Post.hasMany(Comments, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: 'userId'
});

User.hasMany(Comments, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'userId'
});

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

module.exports = {
    Comments,
    Post,
    User
}