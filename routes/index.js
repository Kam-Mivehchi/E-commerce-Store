const router = require('express').Router();
const apiRouting = require('./api')
//end point for /api will execute the export from the api index file
router.use('/api', apiRouting);

module.exports = router;