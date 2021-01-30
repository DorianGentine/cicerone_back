const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path')

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const app = express();

// https://docs.google.com/spreadsheets/d/1ZNcIoBT-fomDFMaOnX3qYEcQLk82zZwHZRSv0MhdPqw/edit#rangeid=968169635
// Connection à la db mongoDB
// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cicv1.rxeit.mongodb.net/test?retryWrites=true&w=majority`,
// Connection test
mongoose.connect('mongodb://localhost/cicerone', 
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

app.use('/', (req, res, next) => {
  res.status(200).json({message: "Bienvenue sur l'api de CicTrainer"})
})
app.use('/api/stuff', stuffRoutes)
app.use('/api/auth', userRoutes);

module.exports = app;


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("Connected")
  
//   const kittySchema = new mongoose.Schema({
//     name: String
//   });

//   kittySchema.methods.speak = function () {
//     const greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   }

//   const Kitten = mongoose.model('Kitten', kittySchema);

//   const tsuki = new Kitten({ name: 'Tsuki' });
//   tsuki.speak();
//   // tsuki.save(function (err, tsuki) {
//   //   if (err) return console.error(err);
//   // });
// });