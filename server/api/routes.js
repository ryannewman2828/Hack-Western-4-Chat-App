const express = require('express');
const router = express.Router();

// Controllers
const TwitterController = require('./Controllers/TwitterController');
const UserController = require('./Controllers/UserController');

router.get('/v1/test', TwitterController.test);

// User routes
router.post('/v1/register', UserController.register);
router.post('/v1/login', UserController.login);

module.exports = router;