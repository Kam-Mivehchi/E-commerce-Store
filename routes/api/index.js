const router = require('express').Router();
const categories = require('./categories');
//expecute the router export from categories file

router.use('/categories', categories)