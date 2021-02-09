const Region = require('../models/region');
// const fs = require('fs');

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
  const regionObject = { 
    ...req.body 
  };
  Region.updateOne({ _id: req.params.id }, { ...regionObject })
    .then(() => res.status(200).json({ region: regionObject }))
    .catch(error => res.status(400).json({ error }));
};

exports.destroy = (req, res, next) => {
  Region.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

// exports.getOneThing = (req, res, next) => {
//   Thing.findOne({
//     _id: req.params.id
//   }).then(
//     (thing) => {
//       res.status(200).json(thing);
//     }
//   ).catch(
//     (error) => {
//       res.status(404).json({
//         error: error
//       });
//     }
//   );
// };