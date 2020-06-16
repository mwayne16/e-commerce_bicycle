const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
//Create port on client enviroment or :3001
const PORT = process.env.PORT || 8000;
//Init Express
const app = express();

//Init middleware
//Resolve Cross Domain Fetching
app.use(cors());
//Body parser middleware
app.use(express.json());
// Handles URL encoded data. For example http post requests from forms
app.use(express.urlencoded({ extended: false }));
mongoose.set('useCreateIndex', true);
app.get('/', (req, res) => res.send('Hi from Node'));

//API Routes

//Product Items
app.use('/api/products', require('./routes/api/products'));
//Users
app.use('/api/users', require('./routes/api/users'));

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('DB Connected!')
);

//Create Port

//Start listening on port
app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));
