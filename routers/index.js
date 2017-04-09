var express = require('express'),
    file1 = require('../controllers/file1'),
    file2 = require('../controllers/file2'),
    form = require('../controllers/form'),
    err = require('../controllers/err'),
    router = express.Router();

router.route('/').get(file1);
router.route('/page2').get(file2);
router.route('/form').post(form);
router.route('*').get(err);

module.exports = router;