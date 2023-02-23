const FlightModel = require("../models/flight.model");


exports.getOneflight = async (req, res) => {
    try {
        const flight = await FlightModel.findById(req.params.id);
        if (flight) {
            return res.status(200).json({ message: 'The requested flight details.', data: flight });
        } else {
            return res.status(404).json({ message: 'The requested flight does not exist.' });
        }
    } catch (error) {
        return res.status(400).json({ message: error.message, error });
    }
}