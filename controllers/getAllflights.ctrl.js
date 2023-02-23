const FlightModel = require('../models/flight.model');

exports.getAllflights = async (req, res) => {
    try {
        const flights = await FlightModel.find();
        return res.status(200).json({ message: 'All available flights', data: flights });
    } catch (error) {
        return res.status(400).json({ message: error.message, error });
    }
};