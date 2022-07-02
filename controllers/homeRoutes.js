const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({ //instead of loading user data here, we want to load all post on initial load
            limit: 10,
            order: [['updatedAt', 'DESC']],
            include: [
                {
                  model: User,
                  attributes: ['username'],
                },
        });

        const posts = postData.map((post) => post.get({ plain: true}));//chang users to post

        res.render('homepage', {
            posts, //put post data here 
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return
    }
    res.render('login');
});

module.exports = router