const express = require('express');
const { addFlightDetails } = require('../controllers/addFlightDetails.ctrl');
const { deleteFlightDetails } = require('../controllers/deleteFlightDetails.ctrl');
const { getAllflights } = require('../controllers/getAllflights.ctrl');
const { getOneflight } = require('../controllers/getOneflight.ctrl');
const { replaceFlightDetails } = require('../controllers/replaceFlightDetails.ctrl');
const { updateFlightDetails } = require('../controllers/updateFlightDetails.ctrl');
const FlightRouter = express.Router();

FlightRouter.get('/flights', getAllflights);
FlightRouter.get('/flights/:id', getOneflight);

FlightRouter.post('/flights', addFlightDetails);

FlightRouter.patch('/flights/:id', updateFlightDetails);

FlightRouter.put('/flights/:id', replaceFlightDetails);

FlightRouter.delete('/flights/:id', deleteFlightDetails);

module.exports = FlightRouter;