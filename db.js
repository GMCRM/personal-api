const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB using Mongoose');
  } catch (err) {
    console.error('Mongoose connection error:', err);
  }
}

connectToDatabase();

module.exports = mongoose;