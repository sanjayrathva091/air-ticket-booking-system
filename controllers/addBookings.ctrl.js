const BookingModel = require("../models/booking.model");


exports.addBookings = async (req, res) => {
    try {
        const userId = req.userId;
        const flightId = req.params.id;
        const newBooking = new BookingModel({ user: userId, flight: flightId });
        return res.status(201).json({ message: 'The flight has been booked successfully.' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};