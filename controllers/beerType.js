const BeerType = require('../models/beerType')

const Bitterness = require('../models/bitterness')
const AlcoholTitle = require('../models/alcoholTitle')
const Color = require('../models/beerColor')
const Country = require('../models/region')
const Category = require('../models/beerCategory')


async function editBeerTypes(beerTypes){
  
  // Va chercher les infos dans la DB
  async function getValue(id, model){
    let response = await model.findById(id, function(err, result){
      if (err) {
        console.error(err);
      }
    })
    return response
  }

  // Formate les bières
  const updatedBeers = await Promise.all(beerTypes.map(async beer => {
    return {
      _id: beer._id,
      name: beer.name,
      country: await getValue(beer.country, Country),
      category: await getValue(beer.category, Category),
      bitterness: {
        min: await getValue(beer.bitterness.min, Bitterness),
        max: await getValue(beer.bitterness.max, Bitterness)
      },
      alcoholTitle: {
        min: await getValue(beer.alcoholTitle.min, AlcoholTitle),
        max: await getValue(beer.alcoholTitle.max, AlcoholTitle)
      },
      color: {
        min: await getValue(beer.color.min, Color),
        max: await getValue(beer.color.max, Color)
      },
      __v: beer.__v
    }
  }))

  return updatedBeers
}

exports.index = (req, res, next) => {
  BeerType.find()
    .then(async beerTypes => {
      const editedBeerTypes = await editBeerTypes(beerTypes)
      res.status(200).json(editedBeerTypes)
    })
    .catch(error => { res.status(400).json({ error: error }) })
}

exports.create = (req, res, next) => {
  const beerType = new BeerType({
    ...req.body
  })
  console.log('beerType', beerType)
  beerType.save()
    .then(() => res.status(201).json({ beerType: beerType }))
    .catch(error => res.status(400).json({ error }))
}

exports.update = (req, res, next) => {
  BeerType.updateOne({ _id: req.params.id}, { ...req.body })
    .then(() => res.status(200).json({ beerType: req.body }))
    .catch(error => res.status(400).json({ error }))
}

exports.destroy = (req, res, next) => {
  BeerType.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }))
};

// exports.show = (req, res, next) => {
//   beerType.findOne({ _id: req.params.id })
//     .then(beerType => res.status(200).json(beerType))
//     .catch(error => res.status(400).json({ error }))
// }