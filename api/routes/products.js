const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');
const Order = require('../models/order');

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
          stock: doc.stock,
          request: {
            get: "/products/" + doc._id
          }
        };
      })
    };
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

    Order.find({confirmed: false})
    .exec()
    .then(docsTwo=>{
      const responseTwo = {
        count: docsTwo.length,
        orders: docsTwo.map(docTwo=>{
          return {
            _id: docTwo._id,
            name: docTwo.name,
            price: docTwo.price,
            quantity: docTwo.quantity
          };
        })
      };

      console.log(responseTwo.orders);

      res.render('product', {
        title: "Product Details",
        products: docs,
        orders: responseTwo.orders
      });
    })
    .catch(err=>{
      console.log(err);
    });
  })
  .catch(err=>{
    console.log(err);
  });
});

router.get('/:category', (req,res,next)=>{
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

router.get('/:category/:type', (req,res,next)=>{
  let category = req.params.category;
  let type = req.params.type;
  Product.find({$and:[{category:category},{sub_category:type}]})
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

router.get('/:category/:ident/:sub', (req,res,next)=>{
  let category = req.params.category;
  let identifier = req.params.ident;
  let sub = req.params.sub;

  Product.find({$and:[{category:category},{$or:[{section:identifier},{gender:identifier},{type:identifier}]},{sub_category:sub}]})
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
