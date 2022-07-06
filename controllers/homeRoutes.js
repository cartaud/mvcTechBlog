const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({ 
            limit: 10,
            order: [['updated_at', 'DESC']],
            include: [
                {
                  model: User,
                  attributes: ['username']
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true}));//chang users to post

        
        res.render('homepage', {
            posts, 
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

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/comment', withAuth, (req, res) => {
    res.render('comment')
});





module.exports = router