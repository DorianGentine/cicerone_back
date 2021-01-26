const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path')

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const app = express();


// https://docs.google.com/spreadsheets/d/1ZNcIoBT-fomDFMaOnX3qYEcQLk82zZwHZRSv0MhdPqw/edit#rangeid=968169635
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cicv1.rxeit.mongodb.net/ciceronetrainer?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true  
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(error => console.log('Échec:', error));

// Autorise requêtes externes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Parse requêtes en JSON
app.use(bodyParser.json());

// app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/stuff', stuffRoutes)
app.use('/api/auth', userRoutes);

module.exports = app;