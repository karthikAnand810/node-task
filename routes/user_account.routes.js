const express = require('express');
const router = express.Router();
const accountController = require('../controllers/user_account.controller');

// Create a new account
router.post('/create', accountController.createAccount);

// Get all accounts
router.get('/', accountController.getAllAccounts);

// Get an account by ID
router.get('/:id', accountController.getAccountById);

// Update an account by ID
router.put('/update/:id', accountController.updateAccount);

// Delete an account by ID
router.delete('/delete/:id', accountController.deleteAccount);

module.exports = router;
