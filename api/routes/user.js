const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('/:date', (req,res,next)=>{
  bcrypt.hash(req.body.pwd, 10, (err,hash)=>{
    if (err) {
      console.log(err);
    }else{
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        phone: req.body.phone,
        town: req.body.town,
        mail: req.body.mail,
        pwd: hash
      });

      user
      .save()
      .then(result=>{
        console.log(result);
        res.redirect(303, '/');
      })
      .catch(err=>{
        console.log(err);
      });
    }
  });
});

module.exports = router;
