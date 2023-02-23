const express = require('express');
const { login } = require('../controllers/login.ctrl');
const { register } = require('../controllers/register.ctrl');
const UserRouter = express.Router();

UserRouter.post('/register', register);
UserRouter.post('/login', login);

module.exports = UserRouter;