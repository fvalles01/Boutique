const Product = require('../models/Product');
const User = require('../models/User');


  exports.allAccess = (req, res) => {
    Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({error}));
    
  };

  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
