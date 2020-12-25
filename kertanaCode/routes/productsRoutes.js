var express = require('express');
var router = express.Router();
var mProd = require('../models/productsModel');

/* GET all. */
router.get('/', async function(req, res, next) {
  let products =  await mProd.getAllProducts();
  res.send(products); 
});

router.get('/:name', async function(req, res, next) {
  let productName = req.params.name;
  let product =  await mProd.getProduct(productName);
  res.send(product); 
});

router.get('/storedProcedure/:name', async function(req, res, next){
  let localName = req.params.name;
  let products = await mProd.getSuitableProducts(localName);
  res.send(products);
});


module.exports = router;