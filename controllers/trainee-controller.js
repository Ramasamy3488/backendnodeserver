const TraineesModel = require('../models/trainees-model');

// Read all Trainees
function readAllTrainees(req, res) {
    try {
        TraineesModel.find({})
            .then(trainees => {
                res.json(trainees);
            })
    } catch (err) {
        res.json(err.message);
    }
}
// readAllTrainees();

// Read specific Trainee by Name/Email
function readTrainee(req, res) {
    try {
        const { name, email } = req.body; // CHANGED from req.query to req.body

        if (!name && !email) {
            return res.status(400).json({ message: "No search criteria provided." });
        }

        const query = {};
        if (name) query.name = name;
        if (email) query.email = email;

        const trainees = TraineesModel.find(query);

        if (trainees.length > 0) {
            return res.status(200).json(trainees);
        } else {
            return res.status(404).json({ message: "No trainees found." });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}


// readTrainee("Tony", "tony@gmail.com");

// Add a new Trainee
async function addTrainee(req, res) {

    const Trainee = new TraineesModel(req.body);

    try {
        let traineeExists = await TraineesModel.find({"email": req.body.email});

        (traineeExists.length > 0)
            ?
            res.json("Trainee Already Exists!")
            :
            (await Trainee.save(), res.json("Trainee Added Successfully!"));
    } catch(err) {
        let errorList = [];
        if(err.errors) {
            for(let temp in err.errors) {
                errorList.push(err.errors[temp].message)
            }
        }
        res.json(errorList);
    }
}
// addTrainee("Raju", "raju@gmail.com", "January", "2023", "7-9pm");

// Update a specific Trainee
function updateTrainee(req, res) {
    try {
        TraineesModel.updateOne({"email": req.body.email}, {$set: req.body})
            .then(results => {
                (results.modifiedCount > 0)
                    ?
                    res.json("Trainee Updated Successfully!")
                    :
                    res.json("Unable to update the Trainee!");
            })
    } catch (err) {
        res.json(err.message);
    }
}
// updateTrainee("Dinesh", "srinanoo@gmail.com", "January", 2023, "7-9pm");

// Delete a specific Trainee
function deleteTrainee(req, res) {
    try {
        TraineesModel.deleteOne({"email": req.body.email})
            .then(results => {
                (results.deletedCount > 0)
                    ?
                    res.json("Trainee Deleted Successfully!")
                    :
                    res.json("Unable to delete the Trainee!");
            })
    } catch (err) {
        res.json(err.message);
    }
}
// deleleteTrainee("raju@gmail.com");

module.exports = {
    readAllTrainees,
    readTrainee,
    addTrainee,
    updateTrainee,
    deleteTrainee
}
