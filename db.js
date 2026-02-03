const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err.message));

module.exports = mongoose.connection;