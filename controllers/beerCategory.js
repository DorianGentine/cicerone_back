const BeerCategory = require('../models/beerCategory')

exports.index = (req, res, next) => {
  BeerCategory.find()
    .then(beerCategories => {res.status(200).json(beerCategories)})
    .catch(error => { res.status(400).json({ error: error }) })
}

exports.create = (req, res, next) => {
  const beerCategory = new BeerCategory({
    ...req.body
  })
  beerCategory.save()
    .then(() => res.status(201).json({ beerCategory: beerCategory }))
    .catch(error => res.status(400).json({ error }))
}

exports.update = (req, res, next) => {
  BeerCategory.updateOne({ _id: req.params.id}, { ...req.body })
    .then(() => res.status(200).json({ beerCategory: req.body }))
    .catch(error => res.status(400).json({ error }))
}

exports.destroy = (req, res, next) => {
  BeerCategory.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }))
};

// exports.show = (req, res, next) => {
//   beerCategory.findOne({ _id: req.params.id })
//     .then(beerCategory => res.status(200).json(beerCategory))
//     .catch(error => res.status(400).json({ error }))
// }