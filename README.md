# Air Ticket Booking System - Backend

## Description :

Air Ticket Booking System is a backend project which provides api end points for various http request for booking flights available.

### Schema & Models:

- User Model

```
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String
}
```

- Flight Model

```
{
  _id: ObjectId,
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}
```

- Booking Model

```
{
	 _id: ObjectId,
	 user : { type: ObjectId, ref: 'User' },
	 flight : { type: ObjectId, ref: 'Flight' }
}
```

### The following api end points are available:

| METHOD | END POINTS    | DESCRIPTION                                                  |
| ------ | ------------- | ------------------------------------------------------------ |
| POST   | /api/register | This endpoint should allow users to register.                |
| POST   | /api/login    | This endpoint should allow users to login.                   |
| GET    | /api/flights  | This endpoint should return a list of all available flights. |
