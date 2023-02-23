const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: { type: String },
    flightNo: { type: String },
    departure: { type: String },
    arrival: { type: String },
    departureTime: { type: Date },
    arrivalTime: { type: Date },
    seats: { type: Number },
    price: { type: Number }
});

const FlightModel = mongoose.model('Flight', flightSchema);

module.exports = FlightModel;