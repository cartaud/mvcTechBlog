const { Comments } = require('../models');

const commentsData = [
    {
        body: 'This is a test for my db',
        created_at: 'May 05, 2017',
        updated_at: 'May 05, 2017',
        post_id: 1,
        user_id: 1
    }
]
    

const seedCategories = () => Comments.bulkCreate(commentsData);

module.exports = seedCategories;