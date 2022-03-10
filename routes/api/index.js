const router = require('express').Router();
const categories = require('./categories');

router.use('/categories', categories)