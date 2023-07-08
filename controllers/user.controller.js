const User = require('../models/user.model');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const payload = req.body
        const user = await User.create(payload);
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ user });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const updateData = req.body;
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Deleted Successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
