const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false})); // this is used when data / payload is sent as req body method / form urlencoded;
// "urlencoded" is using a package called as "querystring", but this package is internally uses another package called as "body-parser". But "body-parser" package is deprecated and will be removed any time. If "extended" is false, then "urlencoded" will use the package called as "qs", which is the latest package.
app.use(express.json()); // this is used when data / payload is sent as req body as JSON

// RESTFul APIs ( GET, POST, PUT, DELETE)
//     // http://localhost:5000/readAllTrainees
// app.get("/readAllTrainees", expressModules.readAllTrainees);

//     // http://localhost:5000/readTrainee
// app.get("/readTrainee", expressModules.readTrainee);

//     // http://localhost:5000/addTrainee
// app.post("/addTrainee", expressModules.addTrainee);

//     // http://localhost:5000/updateTrainee
// app.put("/updateTrainee", expressModules.updateTrainee);

//     // http://localhost:5000/deleteTrainee
// app.delete("/deleteTrainee", expressModules.deleteTrainee);


// Trainee Routes
    // http://localhost:5000/v1/api/trainees
const TraineeRoutes = require("./routes/trainee-routes");
app.use("/v1/api/trainees", TraineeRoutes);

app.get("/*", (req, res) => {
  res.send("API is working!");
});


// Classes Routes
    // http://localhost:5000/v1/api/classes

// Batches Routes
    // http://localhost:5000/v1/api/batches

// Trainers Routes
    // http://localhost:5000/v1/api/trainers

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});
