const FlightModel = require("../models/flight.model");


exports.addFlightDetails = async (req, res) => {
    try {
        const flightDetails = req.body;
        const newFlight = new FlightModel(flightDetails);
        const saved = await newFlight.save();
        return res.status(201).json({ message: 'New flight added successfully' });
    } catch (error) {
        return res.status(400).json({ message: error.message, error });
    }
};
