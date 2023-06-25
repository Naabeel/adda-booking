// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

app.use(cors());

// Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1/facilityBooking'
// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect('mongodb+srv://naabeelahhmed:123321@cluster0.pgvh3ld.mongodb.net/?retryWrites=true&w=majority'), {
    useNewUrlParser: true
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
