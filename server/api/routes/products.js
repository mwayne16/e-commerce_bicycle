const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

//Get all Products
router.get('/', async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
