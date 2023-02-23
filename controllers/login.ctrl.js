require('dotenv').config();
const bcrypt = require('bcrypt');
const JwT = require('jsonwebtoken');
const UserModel = require("../models/user.model");


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const oldUser = await UserModel.findOne({ email });
        if (!oldUser) return res.status(401).json({ message: 'Login required!' });
        const isMatched = bcrypt.compareSync(password, oldUser.password);
        const PrivateKey = process.env.PRIVATE_KEY;
        const accessToken = JwT.sign({ email, userId: oldUser._id }, PrivateKey);
        return isMatched ? res.status(201).json({ message: 'Login successful!', accessToken }) : res.status(401).json({ message: 'Wrong credential! Login failed.' });
    } catch (error) {
        return res.status(400).json({ message: error.message, error });
    }
};
