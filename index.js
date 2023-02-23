require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db.configs');
const UserRouter = require('./router/user.routes');
const FlightRouter = require('./router/flight.routes');
const BookingRouter = require('./router/booking.routes');

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api', UserRouter);
app.use('/api', FlightRouter);
app.use('/api', BookingRouter);

// listen
app.listen(PORT, () => {
    connectDB();
    console.log(`listening on port ${PORT}`);
});