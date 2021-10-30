var express = require('express');
var prodC = require('../controllers/prodC')
var router = express.Router();

/* GET product listing. */
router.get('/',prodC.productController );

module.exports = router;
