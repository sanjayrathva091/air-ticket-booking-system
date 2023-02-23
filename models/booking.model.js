const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.SchemaTypes.ObjectId, refs: 'User' },
    flight: { type: mongoose.SchemaTypes.ObjectId, refs: 'Flight' }
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;