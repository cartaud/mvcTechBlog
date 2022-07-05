const Comments = require('./Comments');
const Post = require('./Post');
const User = require('./User');

Comments.belongsTo(Post, {
    foreignKey: 'post_id'
});

Post.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Comments,
    Post,
    User
}