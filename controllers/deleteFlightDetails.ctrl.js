const FlightModel = require("../models/flight.model");


exports.deleteFlightDetails = async (req, res) => {
    try {
        const flightId = req.params.id;
        const deleted = await FlightModel.findByIdAndDelete(flightId);
        return res.status(202).json({ message: 'The flight details have been deleted.' });
    } catch (error) {
        return res.status(400).json({ message: error.message, error });
    }
};