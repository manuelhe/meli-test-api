const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const search = require('./routes/search');
const item = require('./routes/item');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/items', search);
app.use('/api/items/', item);

module.exports = app;
