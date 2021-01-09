const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const search = require('./routes/search');
const item = require('./routes/item');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/items', search);
app.use('/api/items/', item);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

module.exports = app;
