const express = require('express');

const upload = require('./upload/routes');
const auth = require('./auth/routes');

const api = express.Router();

api.use('/upload', upload);
api.use('/auth', auth);

module.exports = api;
