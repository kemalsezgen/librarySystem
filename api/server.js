const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const BookStore = require('./models/BookModel');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Welcome...")
})

app.get('/haberler', (req, res) => {
  res.send("Haber sayfası...")
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

