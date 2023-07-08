const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Create a new user
router.post('/create', userController.createUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get a user by ID
router.get('/:id', userController.getUserById);

// Update a user by ID
router.put('/update/:id', userController.updateUser);

// Delete a user by ID
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
