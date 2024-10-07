const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get all users
router.get('/', userController.getUsers);

// Route to create a new user
router.post('/', userController.createUser);

module.exports = router;