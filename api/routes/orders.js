const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/product');

/*router.get('/',(req,res,next)=>{
  Product.find({})
  .exec()
  .then(docs=>{
    const response = {
      count: docs.length,
      orders: docs.map(doc=>{
        return {
          _id: doc._id,
          p_id: doc.p_id,
          name: doc.name,
          price: doc.price,
          quantity: doc.quantity,
          location: doc.location
        };
      })
    };
  })
  .catch(err=>{
    console.log(err);
  });
});*/

router.post('/',(req,res,next)=>{
  let p_id = req.body.pid;
  let name = req.body.name;
  let price = req.body.price;
  let quantity =  req.body.quantity;
  let location =  req.body.location;

  let order = new Order({
    _id: new mongoose.Types.ObjectId(),
    p_id: p_id,
    name: name,
    price: price,
    quantity: quantity,
    location: location,
    confirmed: false
  });

  order
  .save()
  .then(result=>{
    let id = result.p_id;
    Product.findOne({_id: id})
    .exec()
    .then(ordered=>{
      let initialStock = ordered.stock;
      let finalStock = initialStock - quantity;
      if (finalStock>0) {
        Product.update({_id: id},{$set:{stock:finalStock}})
        .exec()
        .then(result=>{
          console.log("Stock updated succesfully");
        })
        .catch(err=>{
          console.log(err);
        });
      }else{
        let finalStock = 0;
        Product.update({_id: id},{$set:{stock:finalStock}})
        .exec()
        .then(result=>{
          console.log("Stock updated succesfully to 0");
        })
        .catch(err=>{
          console.log(err);
        });
      }
    })
    .catch(err=>{
      console.log(err);
    });
  })
  .catch(err=>{
    console.log(err)
  });
});

router.get('/:id',(req,res,next)=>{
  let id = req.params.id;
  Order.remove({_id: id})
  .exec()
  .then(result=>{
    console.log(`Product ${id} removed succesfully.`);
    res.redirect(303, '/');
  })
  .catch(err=>{
    console.log(`Failed to delete order ${id} ${err}`);
  });
});

module.exports = router;
