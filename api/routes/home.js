const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Product = require('../models/product');


router.get('/', (req,res,next)=>{
  Product.find({$or:[{class:'elec-details'},{class:'acc-details'},{class:'bea-details'},{class:'cloth-details'},{class:'home-details'},{class:'enter-details'},{class:'jew-details'}]})
  .exec()
  .then(docs=>{
    const response = {
      count: docs.length,
      products: docs.map(doc=>{
        return {
          _id: doc._id,
          class: doc.class,
          name: doc.name,
          price: doc.price,
          gender: doc.gender,
          section: doc.section,
          type: doc.type,
          category: doc.category,
          sub_category: doc.sub_category,
          img: doc.img,
          description: doc.description,
          stock: doc.stock,
          request: {
            get: "/products/" + doc._id
          }
        };
      })
    };

    console.log(response.products);
    res.render('home', {
      title: "MTZ",
      products: response.products
    });
  })
  .catch(err=>{
    console.log(err);
  });
});


router.get('/products/mobile/:category', (req,res,next)=>{
  let category = req.params.category;
  Product.find({category:category})
  .exec()
  .then(docs=>{
    const response = {
      products: docs.map(doc=>{
        return {
          _id: doc._id,
          class: doc.class,
          name: doc.name,
          price: doc.price,
          gender: doc.gender,
          section: doc.section,
          type: doc.type,
          category: doc.category,
          sub_category: doc.sub_category,
          img: doc.img,
          description: doc.description,
          stock: doc.stock,
          request: {
            get: "/products/" + doc._id
          }
        };
      })
    };
    res.render('products', {
      title: category,
      products: response.products
    });
  })
  .catch(err=>{
    console.log(err);
  });
});

module.exports = router;
