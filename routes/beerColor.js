const express = require('express');
const router = express.Router()

const beerColorCtrl = require('../controllers/beerColor');

// route: /api/alcohol_title

router.get('/', beerColorCtrl.index);
router.post('/', beerColorCtrl.create);
router.put('/:id', beerColorCtrl.update);
router.delete('/:id', beerColorCtrl.destroy);
// router.get('/:id', beerColorCtrl.show);

module.exports = router;