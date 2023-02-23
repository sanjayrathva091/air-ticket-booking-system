const FlightModel = require("../models/flight.model");



exports.updateFlightDetails = async (req, res) => {
    try {
        const flightId = req.params.id;
        const updatedFlight = req.body;
        const updated = await FlightModel.findByIdAndUpdate(flightId, updatedFlight);
        return res.status(204).json({ message: 'The flight details have been updated.' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};