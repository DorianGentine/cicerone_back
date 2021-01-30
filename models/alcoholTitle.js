// https://mongoosejs.com/docs/guide.html
// https://mongoosejs.com/docs/schematypes.html
// https://mongoosejs.com/docs/populate.html

const mongoose = require('mongoose');

// défini le schéma du modèle
const alcoholTitleSchema = mongoose.Schema({
  name: { type: String, required: true},
});

// exporte le modèle
module.exports = mongoose.model('AlcoholTitle', alcoholTitleSchema);