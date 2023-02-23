require('dotenv').config();
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');

exports.register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const saltRound = 8;
        const hashPassword = bcrypt.hashSync(password, saltRound);
        const user = new UserModel({ email, password: hashPassword, name });
        const saved = await user.save();
        return res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        return res.status(400).json({ message: error.message, error })
    }
};