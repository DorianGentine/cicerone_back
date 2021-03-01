const express = require('express');
const router = express.Router()

const beerTypeCtrl = require('../controllers/beerType');

// route: /api/alcohol_title

router.get('/', beerTypeCtrl.index);
router.post('/', beerTypeCtrl.create);
router.put('/:id', beerTypeCtrl.update);
router.delete('/:id', beerTypeCtrl.destroy);
// router.get('/:id', beerTypeCtrl.show);

module.exports = router;