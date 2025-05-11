const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

const traineeSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter the Trainee Name"]
    },
    email: {
        type: String,
        required: [true, "Please enter the Trainee Email"]
    },
    batch: {
        type: String,
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    timings: {
        type: String
    },
    year: {
        type: Number
    },
    age: {
        type: Number,
        min: [18, "Age must be over 18 years!"]
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

const TraineesCollection = mongoose.model("trainees", traineeSchema);

module.exports = TraineesCollection;