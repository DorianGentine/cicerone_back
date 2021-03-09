const BeerColor = require('../models/beerColor')

exports.index = (req, res, next) => {
  BeerColor.find()
    .then(beerColors => {
      res.status(200).json(beerColors.sort())
      console.log('beerColors', beerColors)
    })
    .catch(error => { res.status(400).json({ error: error }) })
}

exports.create = (req, res, next) => {
  const beerColor = new BeerColor({
    ...req.body
  })
  beerColor.save()
    .then(() => res.status(201).json({ beerColor: beerColor }))
    .catch(error => res.status(400).json({ error }))
}

exports.update = (req, res, next) => {
  BeerColor.updateOne({ _id: req.params.id}, { ...req.body })
    .then(() => res.status(200).json({ beerColor: req.body }))
    .catch(error => res.status(400).json({ error }))
}

exports.destroy = (req, res, next) => {
  BeerColor.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }))
};

// exports.show = (req, res, next) => {
//   beerColor.findOne({ _id: req.params.id })
//     .then(beerColor => res.status(200).json(beerColor))
//     .catch(error => res.status(400).json({ error }))
// }