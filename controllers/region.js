const Region = require('../models/region');

exports.index = (req, res, next) => {
  Region.find()
    .then(regions => { res.status(200).json(regions)})
    .catch(error => { res.status(400).json({ error: error})})
};

exports.create = (req, res, next) => {
  const region = new Region({
    ...req.body
  });
  region.save()
    .then(() => res.status(201).json({ region: region }))
    .catch(error => res.status(400).json({ error }));
};

exports.update = (req, res, next) => {
  Region.updateOne({ _id: req.params.id }, { ...req.body })
    .then(() => res.status(200).json({ region: req.body }))
    .catch(error => res.status(400).json({ error }));
};

exports.destroy = (req, res, next) => {
  Region.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

// exports.show = (req, res, next) => {
//   Region.findOne({ _id: req.params.id })
//     .then(region => res.status(200).json(region))
//     .catch(error => res.status(404).json({ error}))
// }