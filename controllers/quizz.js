const BeerType = require('../models/beerType')
const Region = require('../models/region')
const Color = require('../models/beerColor')
const AlcoholTitle = require('../models/alcoholTitle')
const Category = require('../models/beerCategory')
const Bitterness = require('../models/bitterness')

async function defineQuestion(){
  const models = [
    {model: Color, modelTitle: "color"},
    {model: Region, modelTitle: "country"},
    {model: AlcoholTitle, modelTitle: "alcoholTitle"},
    {model: Category, modelTitle: "category"},
    {model: Bitterness, modelTitle: "bitterness"}
  ]
  const randomModel = models[Math.floor(Math.random() * 5)]

  const defineModelTitle = () => {
    switch(randomModel.modelTitle){
      case 'color':
        return "color.min color.max"
      case 'alcoholTitle':
        return "alcoholTitle.min alcoholTitle.max"
      case 'bitterness':
        return "bitterness.min bitterness.max"
      default:
        return randomModel.modelTitle
    }
  }

  const defineText = beer => {
    switch(randomModel.modelTitle){
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
        return randomModel.modelTitle
    }
  }

  return promise = new Promise((resolve, reject) => {
    BeerType.find()
    .populate(defineModelTitle(), "-__v")
    .then(beers => {
      const beer = beers[Math.floor(Math.random() * beers.length)]
      randomModel.model.find()
      .then(models => {
        let question = {
          content: defineText(beer),
          answer: beer[randomModel.modelTitle],
          options: models
        }
        resolve(question)
      })
      .catch(error => reject(error))
    })
  })
}

exports.index = async (req, res, next) => {
    const question = await defineQuestion()
    res.status(200).json(question)
}

// exports.show = (req, res, next) => {
//   bitterness.findOne({ _id: req.params.id })
//     .then(bitterness => res.status(200).json(bitterness))
//     .catch(error => res.status(400).json({ error }))
// }