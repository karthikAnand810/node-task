const mongoose = require('mongoose');

const connectDB = async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); // Exit the process with an error
    }
};

module.exports = connectDB;
