const AlcoholTitle = require('../models/alcoholTitle')

exports.index = (req, res, next) => {
  AlcoholTitle.find()
    .then(alcoholTitles => {
      res.status(200).json(alcoholTitles.sort())
    })
    .catch(error => { res.status(400).json({ error: error }) })
}

exports.create = (req, res, next) => {
  const alcoholTitle = new AlcoholTitle({
    ...req.body
  })
  alcoholTitle.save()
    .then(() => res.status(201).json({ alcoholTitle: alcoholTitle }))
    .catch(error => res.status(400).json({ error }))
}

exports.update = (req, res, next) => {
  AlcoholTitle.updateOne({ _id: req.params.id}, { ...req.body })
    .then(() => res.status(200).json({ alcoholTitle: req.body }))
    .catch(error => res.status(400).json({ error }))
}

exports.destroy = (req, res, next) => {
  AlcoholTitle.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }))
};

// exports.show = (req, res, next) => {
//   AlcoholTitle.findOne({ _id: req.params.id })
//     .then(alcoholTitle => res.status(200).json(alcoholTitle))
//     .catch(error => res.status(400).json({ error }))
// }