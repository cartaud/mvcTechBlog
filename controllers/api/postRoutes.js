const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/post', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router

//create new folder in api called dashboard with /new, /edit/:id routes 