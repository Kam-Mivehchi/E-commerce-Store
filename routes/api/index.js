const router = require('express').Router();
const categories = require('./categoriesRoutes');
const products = require('./productRoute');
const tags = require('./tagRoute');
//expecute the router export from categories file

router.use('/categories', categories);
router.use('/products', products);
router.use('/tags', tags);
module.exports = router;