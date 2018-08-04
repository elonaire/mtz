const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req,res,next)=>{
  Product.find()
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

    res.render('products', {
      title: "Products",
      products: response.products
    });
  })
  .catch(err=>{
    console.log(err);
  });
});

router.get('/:id', (req,res,next)=>{
  let id = req.params.id;
  Product.find({_id: id})
  .exec()
  .then(docs=>{
    console.log(docs);
    res.render('product', {
      title: "Product Details",
      products: docs
    });
  })
  .catch(err=>{
    console.log(err);
  });
});

router.get('/:category/:type', (req,res,next)=>{
  let category = req.params.category;
  let type = req.params.type;
  Product.find({$and:[{category:category},{sub_category:type}]})
  .exec()
  .then(docs=>{
    console.log(docs);
    res.render('products', {
      title: category,
      products: docs
    });
  })
  .catch(err=>{
    console.log(err);
  });
});

router.get('/:category/:ident/:sub', (req,res,next)=>{
  let category = req.params.category;
  let identifier = req.params.ident;
  let sub = req.params.sub;

  Product.find({$and:[{category:category},{$or:[{section:identifier},{gender:identifier},{type:identifier}]},{sub_category:sub}]})
  .exec()
  .then(docs=>{
    console.log(docs);
    res.render('products', {
      title: category,
      products: docs
    });
  })
  .catch(err=>{
    console.log(err);
  });
});

module.exports = router;
