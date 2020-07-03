const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv/config');
//Create port on client enviroment or :3001
const PORT = process.env.PORT || 8080;
//Init Express
const app = express();

//Init middlewares
//Resolve Cross Domain Fetching
app.use(cors());
//Body parser middleware
app.use(express.json());
app.use(cookieParser());
// Handles URL encoded data. For example http post requests from forms
app.use(express.urlencoded({ extended: false }));
mongoose.set('useCreateIndex', true);

//API Routes

//Product Items
app.use('/api/products', require('./api/routes/products'));
//Users
app.use('/api/users', require('./api/routes/users'));

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('DB Connected!')
);

//Create Port

//Start listening on port
app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));
