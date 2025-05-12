const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to MongoDB Successfully!!");
    } catch (e) {
        console.error("MongoDB connection error:", e.message);
    }
};

module.exports = { connectToMongoDB };
