require('dotenv').config();
const JwT = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        const accessToken = bearerToken.split(" ")[1];
        const PrivateKey = process.env.PRIVATE_KEY;
        const decoded = JwT.verify(accessToken, PrivateKey);
        req.userId = decoded.userId;
        return next();
    } catch (error) {
        return res.status(400).json({ message: 'Login required', errorMsg: error.message });
    }
};

module.exports = auth;