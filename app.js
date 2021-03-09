const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const alcoholTitleRoutes = require('./routes/alcoholTitle');
const beerCategoryRoutes = require('./routes/beerCategory');
const beerColorRoutes = require('./routes/beerColor');
const beerTypeRoutes = require('./routes/beerType');
const bitternessRoutes = require('./routes/bitterness');
const regionRoutes = require('./routes/region');
const userRoutes = require('./routes/user');

const app = express();

// https://docs.google.com/spreadsheets/d/1ZNcIoBT-fomDFMaOnX3qYEcQLk82zZwHZRSv0MhdPqw/edit#rangeid=968169635
// Connection à la db mongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cicv1.rxeit.mongodb.net/test?retryWrites=true&w=majority`,
// Connection test
// mongoose.connect('mongodb://localhost/cicerone', 
  { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(error => console.log('Échec:', error));

// Autorise requêtes externes
app.use(cors())

// Parse requêtes en JSON
app.use(express.json());

// app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes);
app.use('/api/region', regionRoutes);
app.use('/api/alcohol_title', alcoholTitleRoutes);
app.use('/api/beer_category', beerCategoryRoutes);
app.use('/api/beer_color', beerColorRoutes);
app.use('/api/bitterness', bitternessRoutes);
app.use('/api/beer_type', beerTypeRoutes);
app.use('/', (req, res, next) => {
  res.status(200).json({message: "Bienvenue sur l'api de CicTrainer"})
})

module.exports = app;