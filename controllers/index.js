var express = require('express');

var router = express.Router();
let interceptLogger = require('../middlewares/InterceptLogger');

router.use('/', interceptLogger, require('./Token'));
router.use('/', interceptLogger, require('./ReadFile'));
router.use('/', interceptLogger, require('./Identity'));
router.use('/', interceptLogger, require('./MockService'));
module.exports = router;
