const BeerType = require('../models/beerType')
const Region = require('../models/region')
const Color = require('../models/beerColor')

async function defineQuestion(id, model, modelTitle){
  const defineModelTitle = () => {
    switch(modelTitle){
      case 'color':
        return "color.min color.max"
      case 'alcoholTitle':
        return "alcoholTitle.min alcoholTitle.max"
      case 'bitterness':
        return "bitterness.min bitterness.max"
      default:
        return modelTitle
    }
  }

  const defineText = beer => {
    switch(modelTitle){
      case 'country':
        return `Quelle est la région d'origine de la ${beer.name} ?`
      case 'category':
        return `À quel type appartient la ${beer.name} ?`
      case 'color':
        return `De quelle couleur est la ${beer.name} ?`
      case 'alcoholTitle':
        return `Quelle est le TAV de la ${beer.name} ?`
      case 'bitterness':
        return `De quelle amertume est la ${beer.name} ?`
      default:
        return modelTitle
    }
  }

  return promise = new Promise((resolve, reject) => {
    BeerType.findById(id)
    .populate(defineModelTitle(), "-__v")
    .then(beer => {
      console.log(`beer`, beer)
      model.find()
      .then(models => {
        let question = {
          content: defineText(beer),
          answer: beer[modelTitle],
          options: models
        }
        resolve(question)
      })
      .catch(error => reject(error))
    })
  })
}

exports.index = async (req, res, next) => {
    const question = await defineQuestion("603e371a3cb18e422c8771c7", Color, "color")
    console.log(`question`, question)
    res.status(200).json(question)
}

// exports.show = (req, res, next) => {
//   bitterness.findOne({ _id: req.params.id })
//     .then(bitterness => res.status(200).json(bitterness))
//     .catch(error => res.status(400).json({ error }))
// }