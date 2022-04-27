const express = require('express')
const router = express.Router();
const cors = require('cors');

require('dotenv').config();

const app = express()
const port = 3000

const mongoose = require('mongoose');
// Database
require('./database');

const auth = require("./routes/auth");
const list = require("./routes/list");
const morgan = require('morgan');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send("<h1>Node Api</h1>");
})

// Auth Api
app.use("/auth", auth);
// New List of favorites
app.use("/api/favs", list);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})