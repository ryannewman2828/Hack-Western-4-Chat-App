const express = require('express');
const router = express.Router();

// Controllers
const TwitterController = require('./Controllers/TwitterController');
const UserController = require('./Controllers/UserController');
const ChatController = require('./Controllers/ChatController');

router.get('/v1/test', TwitterController.test);

// User routes
router.post('/v1/register', UserController.register);
router.post('/v1/login', UserController.login);

// Chat routes
router.get('/v1/chat/all', ChatController.getAll);
router.post('/v1/chat/create', ChatController.create);

// Stat routes
router.get('/v1/tone/:email', UserController.getTone);
router.get('/v1/personality/:email', UserController.getPersonality);

module.exports = router;