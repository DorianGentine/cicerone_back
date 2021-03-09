const Bitterness = require('../models/bitterness')

exports.index = (req, res, next) => {
  Bitterness.find().sort()
    .then(bitternesss => {
      res.status(200).json(bitternesss.sort())
    })
    .catch(error => { res.status(400).json({ error: error }) })
}

exports.create = (req, res, next) => {
  const bitterness = new Bitterness({
    ...req.body
  })
  bitterness.save()
    .then(() => res.status(201).json({ bitterness: bitterness }))
    .catch(error => res.status(400).json({ error }))
}

exports.update = (req, res, next) => {
  Bitterness.updateOne({ _id: req.params.id}, { ...req.body })
    .then(() => res.status(200).json({ bitterness: req.body }))
    .catch(error => res.status(400).json({ error }))
}

exports.destroy = (req, res, next) => {
  Bitterness.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }))
};

// exports.show = (req, res, next) => {
//   bitterness.findOne({ _id: req.params.id })
//     .then(bitterness => res.status(200).json(bitterness))
//     .catch(error => res.status(400).json({ error }))
// }