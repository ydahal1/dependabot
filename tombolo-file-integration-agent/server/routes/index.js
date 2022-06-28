const morganMiddleware = require('../config/morganMiddleware');
const { routeNotFound } = require('./errorHandler');
const router = require('express').Router();
const jobs = require('./jobs');

// Logger for each api request
router.use(morganMiddleware);

// All the action goes here
router.use('/jobs', jobs);

router.use(routeNotFound);

module.exports = router;
