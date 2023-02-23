const BookingModel = require("../models/booking.model");


exports.getBookings = async (req, res) => {
    try {
        const bookings = await BookingModel.find({ user: req.userId });
        return res.status(201).json({ message: 'All booked flights', data: bookings });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};