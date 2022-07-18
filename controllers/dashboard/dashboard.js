const router = require('express').Router();
const { User, Post, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    // if (req.session.logged_in) {
    //     res.render('dashboard');
    //     return
    // }
    // else {
    //     res.render('login')
    // }
    try {
        const postData = await Post.findAll({ 
            limit: 20,
            order: [['updated_at', 'DESC']],
            where: {
                user_id: req.session.user_id,
              },
        });

        const posts = postData.map((post) => post.get({ plain: true}));//chang users to post

        
        res.render('dashboard', {
            posts, 
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new', withAuth, async (req, res) => {
    try {
        res.render('post', {
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/edit/:id', withAuth, async (req, res) => {
    //need a way to verify that the post user id is the same as the current user id to prevent users from editing other user post
    try {
        const postData = await Post.findByPk(req.params.id, {
            where: {
                user_id: req.session.user_id
              },
            include: [
                {
                    model: Comments
                }
            ],
        });
        const post = postData.get({ plain: true });
        res.render('edit', {
            ...post,
            logged_in: req.session.logged_in,
        } )
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router