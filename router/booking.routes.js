const express = require('express');
const { addBookings } = require('../controllers/addBookings.ctrl');
const { getBookings } = require('../controllers/getBookings.ctrl');
const auth = require('../middlewares/auth');
const BookingRouter = express.Router();

BookingRouter.get('/dashboard', [auth], getBookings);

BookingRouter.post('/booking', [auth], addBookings);

module.exports = BookingRouter;