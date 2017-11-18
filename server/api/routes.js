const express = require('express');
const router = express.Router();

// Controllers
const TwitterController = require('./Controller/TwitterController');

/* GET home page. */
router.get('/v1/test', function (req, res) {
    // Temp values
    res.json([{
        id: 1,
        username: 'samsepi0l'
    }, {
        id: 2,
        username: 'D0loresH4ze'
    }]);
});

router.get('/v1/test2', TwitterController.test);

module.exports = router;