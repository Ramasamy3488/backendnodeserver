const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false })); // Parses form data
app.use(express.json()); // Parses JSON payloads

// Member Routes
// Example: http://localhost:5000/v1/api/prcmembers
const TraineeRoutes = require('./routes/trainee-routes');
app.use('/v1/api/trainees', TraineeRoutes);

app.use("/*", (req, res) => {
  res.send("Invalid Route!!!");
});

// Start server

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
