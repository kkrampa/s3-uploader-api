const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true, dropDups: true },
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
