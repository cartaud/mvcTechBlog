const { Post } = require('../models');

const postData = [
    {
        title: 'Testing',
        body: 'This is a test for my db',
        created_at: 'May 05, 2017',
        updated_at: 'May 05, 2017',
        user_id: 1
    }
]
    

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;