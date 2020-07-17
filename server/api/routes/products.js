const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

//Get all Products
router.get('/', async (req, res) => {
  try {
    const products = await Products.find();

    res.json({ status: 'success', data: products });
  } catch (err) {
    res.json({ status: 'fail', message: err.message });
  }
});

module.exports = router;
