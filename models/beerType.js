// https://mongoosejs.com/docs/guide.html
// https://mongoosejs.com/docs/schematypes.html
// https://mongoosejs.com/docs/populate.html

const mongoose = require('mongoose');


// défini le schéma du modèle
const beerTypeSchema = mongoose.Schema({
  name: { type: String, required: true },
  country: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true },
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'BeerCategory', required: true },
  bitterness: {
    min: { type: mongoose.Schema.Types.ObjectId, ref: 'Bitterness', required: true },
    max: { type: mongoose.Schema.Types.ObjectId, ref: 'Bitterness', required: true }
  },
  alcoholTitle: {
    min: { type: mongoose.Schema.Types.ObjectId, ref: 'AlcoholTitle', required: true },
    max: { type: mongoose.Schema.Types.ObjectId, ref: 'AlcoholTitle', required: true }
  },
  color: {
    min: { type: mongoose.Schema.Types.ObjectId, ref: 'BeerColor', required: true },
    max: { type: mongoose.Schema.Types.ObjectId, ref: 'BeerColor', required: true }
  }
});

// exporte le modèle
module.exports = mongoose.model('BeerType', beerTypeSchema);