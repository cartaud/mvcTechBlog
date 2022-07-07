const router = require('express').Router();
const { User, Post, Comments } = require('../models');
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

router.get('/comment/new/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comments
                },
                {
                    model: User,
                    attributes: ['id','username'],
                }
            ]
        });
        const post = postData.get({ plain: true });
        res.render('newComment', {
            ...post,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err)
    }
    
});

router.get('/comment/view/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include:  [
                {
                    model: User,
                    attributes: ['id','username'],
                }
            ]
        });
        
        const commentData = await Comments.findAll({
            limit: 20,
            order: [['updated_at', 'DESC']],
            where: {
                post_id: req.params.id,
              },
            include: [
                {
                    model: User,
                    attributes: ['id','username'],
                }
            ]
        });
        const comments = commentData.map((post) => post.get({ plain: true}));
        const post = postData.get({ plain: true });
        console.log(comments, post)
        res.render('viewComment', {
            comments: comments,
            post: post,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router