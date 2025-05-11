const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
const TraineeRoutes = require("./routes/trainee-routes");
app.use("/v1/api/trainees", TraineeRoutes);

// Root health check
app.get("/", (req, res) => {
  res.send("API is working!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
