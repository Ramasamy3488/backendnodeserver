const router = require('express').Router();
const TrainerController = require('../controllers/trainee-controller');

// http://localhost:5000/v1/api/trainees/readAllTrainees
router.get("/readAllTrainees", TrainerController.readAllTrainees);

// http://localhost:5000/v1/api/trainees/readTrainee
router.post("/readTrainee", TrainerController.readTrainee);

// http://localhost:5000/v1/api/trainees/addTrainee
router.post("/addTrainee", TrainerController.addTrainee);

// http://localhost:5000/v1/api/trainees/updateTrainee
router.put("/updateTrainee", TrainerController.updateTrainee);

// http://localhost:5000/v1/api/trainees/deleteTrainee
router.delete("/deleteTrainee", TrainerController.deleteTrainee);

module.exports = router;