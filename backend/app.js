const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require ('path');
const dotenv = require('dotenv').config();

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// app.use(express.json());
const app = express();

app.use((req, res, next) => {
    // 'accéder à notre API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 'ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // 'envoyer des requêtes avec les méthodes mentionnées
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/product', productRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;