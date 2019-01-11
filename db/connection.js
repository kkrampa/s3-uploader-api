const mongoose = require('mongoose');

mongoose.connect(process.env.S3_UPLOAD_DB_URL, { useNewUrlParser: true });

module.exports = mongoose.connection;
