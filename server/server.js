const express = require('express');
const products = require('./routes/api/products');
const mongoose = require('mongoose');
require('dotenv/config');
//Create port on client enviroment or :3000
const PORT = process.env.PORT || 3001;
//Init Express
const app = express();

//Init middleware
// app.use(logger)

//Body parser middleware
app.use(express.json());
// Handles URL encoded data. For example http post requests from forms
app.use(express.urlencoded({ extended: false }));

//API Routes
//Product Items
app.use('/api/products', products);

app.get('/', (req, res) => res.send('Hi from Node'));

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('DB Connected!')
);

//Create Port

//Start listening on port
app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));
