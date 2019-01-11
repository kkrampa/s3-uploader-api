const express = require('express');

const app = express();
const cors = require('cors');

const api = require('./routes');
const connection = require('./db/connection');

app.use(express.json());
app.use(cors());

connection.once('open', () => {
  console.log('connected');
});

app.use('/api', api);

module.exports = app;
