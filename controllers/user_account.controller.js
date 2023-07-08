const Account = require('../models/user_account.model');

// Create a new account
exports.createAccount = async (req, res) => {
    try {
        const payload = req.body;
        const account = await Account.create(payload);
        res.status(201).json({ account });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all accounts
exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json({ accounts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an account by ID
exports.getAccountById = async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findById(id);
        res.status(200).json({ account });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update an account by ID
exports.updateAccount = async (req, res) => {
    try {
        const updateData = req.body;
        const { id } = req.params;
        const account = await Account.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({ account });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an account by ID
exports.deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;
        await Account.findByIdAndDelete(id);
        res.status(204).json({ message: 'Deleted Successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
