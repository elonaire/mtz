const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const upload = multer({dest: 'uploads/'});

const Product = require('../models/product');

router.get('/', (req,res,next)=>{
  res.render('admin', {
    title: "Admin",
    date: new Date(),
    dateTwo: new Date()
  });
});

router.post('/:date', upload.single('photo'), (req,res,next)=>{
    console.log(req.file);
    let tClass = null;
    switch (req.body.category) {

      //Electronics
      case 'Electronics':
        req.body.category = "electronics";
        req.body.c_gender = "N/A";
        req.body.home_sub = "N/A";
        req.body.enter = "N/A";
        switch (req.body.sub_category) {
          case 'Sound Systems':
            req.body.sub_category = "systems";
            break;

            case 'TVs':
              req.body.sub_category = "tvs";
              break;

              case 'Phones':
                req.body.sub_category = "phones";
                break;

                case 'Tablets':
                  req.body.sub_category = "tablets";
                  break;

                  case 'Cameras':
                    req.body.sub_category = "cameras";
                    break;

                    case 'Laptops':
                      req.body.sub_category = "laptops";
                      break;

                      case 'Desktops':
                        req.body.sub_category = "desktops";
                        break;

                        case 'Microprocessors':
                          req.body.sub_category = "microps";
                          break;

                          case 'Microcontrollers':
                            req.body.sub_category = "microcs";
                            break;

                            case 'PCBs':
                              req.body.sub_category = "pcbs";
                              break;
        }
        break;

      //Accessories
        case 'Accessories':
          req.body.category = "accessories";
          req.body.c_gender = "N/A";
          req.body.home_sub = "N/A";
          req.body.enter = "N/A";
          switch (req.body.sub_category) {
            case 'Earphones':
              req.body.sub_category = "ephones";
              break;

              case 'Headphones':
                req.body.sub_category = "hphones";
                break;

                case 'Memory cards':
                  req.body.sub_category = "mems";
                  break;

                  case 'Flash drives':
                    req.body.sub_category = "flash";
                    break;

                    case 'Chargers':
                      req.body.sub_category = "chargers";
                      break;

                      case 'Screen':
                        req.body.sub_category = "sguards";
                        break;

                        case 'Mice':
                          req.body.sub_category = "mice";
                          break;

                          case 'Keyboards':
                            req.body.sub_category = "keyboards";
                            break;

                            case 'Others':
                              req.body.sub_category = "others";
                              break;
          }
          break;

          //Beauty
          case 'Beauty':
            req.body.category = "beauty";
            switch (req.body.sub_category) {
              case 'Face':
                req.body.sub_category = "face";
                break;

                case 'Hair':
                  req.body.sub_category = "hair";
                  break;

                  case 'Body':
                    req.body.sub_category = "body";
                    break;

                    case 'Nails':
                      req.body.sub_category = "nails";
                      break;

                      case 'Skincare':
                        req.body.sub_category = "skincare";
                        break;

                        case 'Dietary':
                          req.body.sub_category = "dietary";
                          break;

                          case 'Others':
                            req.body.sub_category = "others";
                            break;
            }
            break;

            //Clothing
            case 'Clothing':
              req.body.category = "clothing";
              req.body.home_sub = "N/A";
              req.body.enter = "N/A";
              switch (req.body.c_gender) {
                //Male
                case 'Male':
                req.body.c_gender = "Male";
                  switch (req.body.sub_category) {
                    case 'Dresses':
                      req.body.sub_category = "dresses";
                      break;

                      case 'Underwear':
                        req.body.sub_category = "under";
                        break;

                        case 'Official':
                          req.body.sub_category = "official";
                          break;

                          case 'Casual':
                            req.body.sub_category = "casual";
                            break;

                            case 'Shoes':
                              req.body.sub_category = "shoes";
                              break;

                              case 'Other':
                                req.body.sub_category = "other";
                                break;
                  }
                  break;

                  //Female
                  case 'Female':
                    req.body.c_gender = "Female";
                    switch (req.body.sub_category) {
                      case 'Dresses':
                        req.body.sub_category = "dresses";
                        break;

                        case 'Underwear':
                          req.body.sub_category = "under";
                          break;

                          case 'Official':
                            req.body.sub_category = "official";
                            break;

                            case 'Casual':
                              req.body.sub_category = "casual";
                              break;

                              case 'Shoes':
                                req.body.sub_category = "shoes";
                                break;

                                case 'Other':
                                  req.body.sub_category = "other";
                                  break;
                    }
                    break;

                    //Kids
                    case 'Kids':
                      req.body.c_gender = "Kids";
                      switch (req.body.sub_category) {
                        case 'Dresses':
                          req.body.sub_category = "dresses";
                          break;

                          case 'Underwear':
                            req.body.sub_category = "under";
                            break;

                            case 'Official':
                              req.body.sub_category = "official";
                              break;

                              case 'Casual':
                                req.body.sub_category = "casual";
                                break;

                                case 'Shoes':
                                  req.body.sub_category = "shoes";
                                  break;

                                  case 'Other':
                                    req.body.sub_category = "other";
                                    break;
                      }
                      break;
              }
              break;

              //Home
              case 'Home':
                req.body.category = "home";
                req.body.c_gender = "N/A";
                req.body.enter = "N/A";
                switch (req.body.home_sub) {
                  //General
                  case "General":
                    req.body.home_sub = "General";
                    switch (req.body.sub_category) {
                      case 'Curtains':
                        req.body.sub_category = "curtains";
                        break;

                        case 'Lighting':
                          req.body.sub_category = "lighting";
                          break;

                          case 'Smart Locks':
                            req.body.sub_category = "locks";
                            break;

                            case 'Floor':
                              req.body.sub_category = "floor";
                              break;

                              case 'Paintings':
                                req.body.sub_category = "paintings";
                                break;
                    }
                    break;

                    //Kitchen
                    case "kitchen":
                      req.body.home_sub = "Kitchen";
                      switch (req.body.sub_category) {
                        case 'Glassware':
                          req.body.sub_category = "glassware";
                          break;

                          case 'Ceramic':
                            req.body.sub_category = "ceramic";
                            break;

                            case 'Plastic':
                              req.body.sub_category = "plastic";
                              break;
                      }
                      break;

                      //Living Room
                      case "Living":
                        req.body.home_sub = "Living";
                        switch (req.body.sub_category) {
                          case 'Dining Sets':
                            req.body.sub_category = "dining";
                            break;

                            case 'Coaches':
                              req.body.sub_category = "coaches";
                              break;

                              case 'Tables':
                                req.body.sub_category = "tables";
                                break;

                                case 'Wall Units':
                                  req.body.sub_category = "units";
                                  break;
                        }
                        break;
                }
                break;

                //Entertainment
                case 'Entertainment':
                  req.body.category = "entertainment";
                  req.body.c_gender = "N/A";
                  req.body.home_sub = "N/A";
                  switch (req.body.enter) {
                    //Games
                    case 'Games':
                      req.body.enter = "Games";
                      switch (req.body.sub_category) {
                        case 'Kenyan':
                          req.body.sub_category = "kenyan";
                          break;

                          case 'PC':
                            req.body.sub_category = "pc";
                            break;

                            case 'Xbox':
                              req.body.sub_category = "xbox";
                              break;

                              case 'Playstation':
                                req.body.sub_category = "playstation";
                                break;

                                case 'Wii':
                                  req.body.sub_category = "wii";
                                  break;
                      }
                      break;

                      //Movies
                      case 'Movies':
                        req.body.enter = "Movies";
                        switch (req.body.sub_category) {
                          case 'Kenyan':
                            req.body.sub_category = "kenyan";
                            break;

                            case 'Hollywood':
                              req.body.sub_category = "hollywood";
                              break;

                              case 'Nollywood':
                                req.body.sub_category = "nollywood";
                                break;

                                case 'Bollywood':
                                  req.body.sub_category = "bollywood";
                                  break;
                        }
                        break;

                        //Other
                        case 'Other':
                          req.body.enter = "Other";
                          switch (req.body.sub_category) {
                            case 'Game Consoles':
                              req.body.sub_category = "consoles";
                              break;

                              case 'Gaming PCs':
                                req.body.sub_category = "pc";
                                break;
                          }
                          break;
                  }
                  break;

                  //Jewelery
                  case 'Jewelery':
                    req.body.category = "jewelery";
                    req.body.c_gender = "N/A";
                    req.body.home_sub = "N/A";
                    req.body.enter = "N/A";
                    switch (req.body.sub_category) {
                      case 'Watches':
                        req.body.sub_category = "watches";
                        break;

                        case 'Bangles':
                          req.body.sub_category = "bangles";
                          break;

                          case 'Bracelets':
                            req.body.sub_category = "bracelets";
                            break;

                            case 'Chains':
                              req.body.sub_category = "chains";
                              break;

                              case 'Necklaces':
                                req.body.sub_category = "necklaces";
                                break;
                    }
                    break;
    }

    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      class: tClass,
      category: req.body.category,
      gender: req.body.c_gender,
      section: req.body.home_sub,
      type: req.body.enter,
      sub_category: req.body.sub_category,
      name: req.body.name,
      img: req.file.filename,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock
    });

    product
    .save()
    .then(result=>{
      console.log(result);
      res.redirect(303, '/admin');
    })
    .catch(err=>{
      console.log(err);
    });
});

router.get('/:category', (req,res,next)=>{
  let category = req.params.category;
  let tClass = "";

  switch (category) {
    case "electronics":
      tClass = "elec-details";
      break;

      case "accessories":
        tClass = "acc-details";
        break;

        case "beauty":
          tClass = "bea-details";
          break;

          case "clothing":
            tClass = "cloth-details";
            break;

            case "home":
              tClass = "home-details";
              break;

              case "entertainment":
                tClass = "enter-details";
                break;

                case "jewelery":
                  tClass = "jew-details";
                  break;
    default:
      tClass = null;
  }

  Product.find({category: category})
  .exec()
  .then(docs=>{
    const response = {
      count: docs.length,
      products: docs.map(doc=>{
        return {
          _id: doc._id,
          class: tClass,
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
            get: "/products/" + doc._id,
            delete: "/admin/delete/" + doc._id,
            patch: "/admin/update/" + doc._id,
            trend: "/admin/trend/" + doc._id
          }
        };
      })
    };

    console.log(response.products);
    res.render('admin', {
      title: "Admin",
      date: new Date(),
      dateTwo: new Date(),
      products: response.products
    });
  })
  .catch(err=>{
    console.log(err);
  });
});

router.get('/delete/:id', (req,res,next)=>{
  let id = req.params.id;
  Product.remove({_id: id})
  .exec()
  .then(result=>{
    console.log(`Deleted product with id: ${id} succesfully`);
    res.redirect(303, '/admin');
  })
  .catch(err=>{
    console.log(err);
  });
});

router.post('/update/:id', (req,res,next)=>{
  let id = req.params.id;
  let newPrice = req.body.price;
  let newStock = req.body.stock;
  Product.update({_id: id}, {$set:{price: newPrice,stock: newStock}})
  .exec()
  .then(result=>{
    console.log(`Updated product with id: ${id} succesfully`);
    res.redirect(303,'/admin');
  })
  .catch(err=>{
    console.log(err);
  });
});

router.post('/trend/:id', (req,res,next)=>{
  let id = req.params.id;
  let trendClass = req.body.class;
  Product.update({_id: id}, {$set:{class: trendClass}})
  .exec()
  .then(result=>{
    console.log(`Updated product with id: ${id} succesfully`);
    res.redirect(303,'/admin');
  })
  .catch(err=>{
    console.log(err);
  });
});

module.exports = router;
