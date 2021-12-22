const Product = require('../models/Product');


exports.allAccess = (req, res) => {
    Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({error}));
    
  };


  exports.userPostProduct = (req, res) => {
    const productObject = req.body;
    delete productObject._id;
    const product = new Product({
        ...productObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    product.save()
        .then( ()=> res.status(201).json({ message: 'Objet enregisté' }))
        .catch(error => res.status(400).json({ error }));

  };

  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.userBoard = (req, res) => {
    Product.find({ _id: req.params.id })
    .then(product => res.status(200).json(product))
    .catch(error => res.status(400).json({error}));
  };
