const jwt = require('jsonwebtoken');
const User = require('../models/User');

//Helper function to generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// @desc   Register a new user
// @route  POST /api/auth/register
// @access  Public

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc   Login user
// @route  POST /api/auth/login
// @access  Public

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

};

// @desc  Get current logged-in user
// @route  GET /api/auth/me
// @access  Private

exports.getProfile = async (req, res) => {
    try {
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

};

// @desc  Update user profile
// @route  PUT /api/auth/me
// @access  Private

exports.updateProfile = async (req, res) => {
    try {
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

};
