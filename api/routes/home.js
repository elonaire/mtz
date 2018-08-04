const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Product = require('../models/product');
const User = require('../models/user');


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
          request: {
            get: "/products/" + doc._id,
            delete: "/admin/delete/" + doc._id,
            patch: "/admin/update/" + doc._id,
            trend: "/admin/trend/" + doc._id
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

module.exports = router;
