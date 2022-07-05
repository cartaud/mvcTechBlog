const router = require('express').Router();
const dashboardRoutes = require('./dashboard')


router.use('/', dashboardRoutes)



module.exports = router