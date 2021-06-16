const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('New Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));


module.exports= app


//TAikfFKDvjwajv478uNnzyZoE6ir9ZpfgE
