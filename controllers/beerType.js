const BeerType = require('../models/beerType')

exports.index = (req, res, next) => {
  BeerType.find()
    .populate("country category", "-__v")
    .populate("color.min", "-__v")
    .populate("color.max", "-__v")
    .populate("alcoholTitle.min", "-__v")
    .populate("alcoholTitle.max", "-__v")
    .populate("bitterness.min", "-__v")
    .populate("bitterness.max", "-__v")
    .then(async beerTypes => {
      res.status(200).json(beerTypes)
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
//     .populate("country category", "-__v")
//     .populate("color.min", "-__v")
//     .populate("color.max", "-__v")
//     .populate("alcoholTitle.min", "-__v")
//     .populate("alcoholTitle.max", "-__v")
//     .populate("bitterness.min", "-__v")
//     .populate("bitterness.max", "-__v")
//     .then(beerType => res.status(200).json(beerType))
//     .catch(error => res.status(400).json({ error }))
// }